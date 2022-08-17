import React,{ useState, useEffect, useMemo, useCallback, useRef } from "react";
import ItemContainer, { LoadingItemContainer } from "../component/templates/ItemContainer";
import useFetch from "../hooks/useFetch";
import useScroll from "../hooks/useScroll";
import { API_KEY, MOVIE_URL } from "../../config";
import LandingIntro from '../component/organisms/LandingIntro';
import * as Props from './LandingProps';
import LazyComponent from '../hooks/LazyComponent';
const makeURL = (filter) => {
  let { main, language, page, category } = filter;

  return `${MOVIE_URL}${main}/${category}?api_key=${API_KEY}&language=${language}&page=${page}`;
};

const Item = (props) => {
  
  const [filter, setFilter] = useState({
    ...props.info,
  });
  const url = makeURL(filter)
  const [pageLoading, setPageLoading] = useState(true);
  const [aniMode, setAniMode] = useState(true);
 
 
  const { loading, posts } = useFetch(url, filter.category, filter.lazy);

  const loadMore = () => {
    setFilter((prevQuery) => ({ ...prevQuery, page: prevQuery.page + 1, lazy:false }));
  };

  const handleSelect = (category: string) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      category,
      page: 1,
      lazy: true,
    }));
    setAniMode(false);
  };
  
  
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
      <LandingIntro/>
      <Item {...Props.movieProps} />
      {/* <Item {...Props.tvProps} /> */}

      <LazyComponent>
        <LoadingItemContainer {...Props.tvProps}/>
        <Item {...Props.tvProps}/>
      </LazyComponent>
    </>
  );
};

export default LandingPage;
