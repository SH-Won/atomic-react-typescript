import React, { useRef, useState, useEffect } from 'react';
import { MOVIE_URL, API_KEY } from '../../config';
import useFetch from '../hooks/useFetch';
import useScroll from '../hooks/useScroll';

const makeURL = filter => {
    let { main, language, page, category } = filter;

    return page !== null
        ? `${MOVIE_URL}${main}/${category}?api_key=${API_KEY}&language=${language}&page=${page}`
        : `${MOVIE_URL}${main}/${category}?api_key=${API_KEY}&language=${language}`;
};

const withFetch = Component => {
    return props => {
        const [filter, setFilter] = useState({
            ...props.info,
        });

        const domRef = useRef();
        const [pageLoading, setPageLoading] = useState(true);
        const [aniMode, setAniMode] = useState(true);
        const { loading, posts } = useFetch(filter.url, filter.category, filter.lazy);

        const loadMore = ()  =>  {
            setFilter(prevQuery => ({
                ...prevQuery,
                page: prevQuery.page + 1,
                lazy: false,
                url: makeURL({ ...prevQuery, page: prevQuery.page + 1 }),
            }));
        } ;

        const handleSelect = (category, main) => {
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
                        ob.unobserve(domRef.current);
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
