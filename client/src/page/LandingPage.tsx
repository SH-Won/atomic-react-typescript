import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import ItemContainer, { LoadingItemContainer } from '../component/templates/ItemContainer';
import useFetch from '../hooks/useFetch';
import useScroll from '../hooks/useScroll';
import { API_KEY, MOVIE_URL } from '../../config';
import LandingIntro from '../component/organisms/LandingIntro';
import * as Props from './LandingProps';
import LazyComponent from '../hooks/LazyComponent';
const makeURL = filter => {
    let { main, language, page, category } = filter;

    return `${MOVIE_URL}${main}/${category}?api_key=${API_KEY}&language=${language}&page=${page}`;
};

const Item = props => {
    const [filter, setFilter] = useState({
        ...props.info,
    });

    const domRef = useRef();

    const [pageLoading, setPageLoading] = useState(true);
    const [aniMode, setAniMode] = useState(true);

    const { loading, posts } = useFetch(filter.url, filter.category, filter.lazy);

    const loadMore = () => {
        setFilter(prevQuery => ({
            ...prevQuery,
            page: prevQuery.page + 1,
            lazy: false,
            url: makeURL({ ...prevQuery, page: prevQuery.page + 1 }),
        }));
    };

    const handleSelect = (category: string) => {
        setFilter(prevFilter => ({
            ...prevFilter,
            category,
            page: 1,
            lazy: true,
            url: makeURL({ ...prevFilter, category, page: 1 }),
        }));
        setAniMode(false);
    };
    
    useEffect(() => {
        console.log(domRef, 'domRef');
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
    // if (pageLoading) return <div ref={domRef}>loading...</div>;
    return (
        <ItemContainer
            domRef={domRef}
            headerProps={props.headerProps}
            category={props.info.main}
            posts={posts}
            handleSelect={handleSelect}
            lastIndexRef={lastIndexRef}
            aniMode={aniMode}
        />
    );
};

const LandingPage = () => {
    return (
        <>
            <LandingIntro />

            <Item {...Props.movieProps} />

            <Item {...Props.tvProps} />
        </>
    );
};

export default LandingPage;
