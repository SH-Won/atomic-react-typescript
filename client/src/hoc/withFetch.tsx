import { MOVIE } from '../config/landingPageConfig';
import React, { useRef, useState, useEffect } from 'react';
import { MOVIE_URL, API_KEY } from '../../config';
import useFetch from '../hooks/useFetch';
import useScroll from '../hooks/useScroll';


interface FilterProps{
   main:string;
   language:string;
   page:number;
   category:string;
   lazy?: boolean;
   url? : string;

}
type ComponentProps = typeof MOVIE;


export const makeURL = (filter : FilterProps) => {
    let { main, language, page, category } = filter;

    return page !== null
        ? `${MOVIE_URL}${main}/${category}?api_key=${API_KEY}&language=${language}&page=${page}`
        : `${MOVIE_URL}${main}/${category}?api_key=${API_KEY}&language=${language}`;
};

const withFetch = (Component : React.FC<ComponentProps>)  => {
    return (props : ComponentProps) => {
        const [filter, setFilter] = useState<FilterProps>({
            ...props.info,
        });

        const domRef = useRef<HTMLElement>();
        const [pageLoading, setPageLoading] = useState(true);
        const [aniMode, setAniMode] = useState(true);
        const { loading, posts } = useFetch(filter.url as string, filter.category as string, filter.lazy);

        const loadMore = () :void =>  {
            setFilter(prevQuery => ({
                ...prevQuery,
                page: prevQuery.page + 1,
                lazy: false,
                url: makeURL({ ...prevQuery, page: prevQuery.page + 1 }),
            }));
        } ;

        const handleSelect = (category:string, main : string) => {
            setFilter(prevFilter => ({
                ...prevFilter,
                category,
                main,
                page: 1,
                lazy: true,
                url: makeURL({ ...prevFilter, category, page: 1, main }),
            }));
            setAniMode(false);
        };

        useEffect(() => {
            if (!domRef.current) return;
            const observe = new IntersectionObserver(
                ([entry], ob) => {
                    if (entry.isIntersecting) {
                        setFilter(prevFilter => ({
                            ...prevFilter,
                            url: makeURL(prevFilter),
                        }));
                        ob.unobserve(domRef.current as HTMLElement);
                    }
                },
                { threshold: 0.8 },
            );
            observe.observe(domRef.current);
        }, []);

        useEffect(() => {
            if (!loading) {
                setPageLoading(false);
                setAniMode(true);
            }
        }, [loading]);

        const { lastIndexRef } = useScroll(loading, loadMore);

        const componentProps = {
            domRef,
            containerProps: props.containerProps,
            category: props.info.main,
            posts,
            handleSelect,
            lastIndexRef,
            aniMode,
        };

        return <Component {...props} {...componentProps} />;
    };
};

export default withFetch;
