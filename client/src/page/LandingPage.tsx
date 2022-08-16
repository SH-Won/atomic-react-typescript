import React,{ useState, useEffect, useMemo, useCallback } from "react";
import ItemContainer from "../component/templates/ItemContainer";
import useFetch from "../hooks/useFetch";
import useScroll from "../hooks/useScroll";
import { API_KEY, MOVIE_URL } from "../../config";
import LandingIntro from '../component/organisms/LandingIntro';

const makeURL = (filter) => {
  let { main, language, page, category } = filter;

  return `${MOVIE_URL}${main}/${category}?api_key=${API_KEY}&language=${language}&page=${page}`;
};

const Item = (props) => {
  const [filter, setFilter] = useState({
    ...props.info,
  });
  const [pageLoading, setPageLoading] = useState(true);
  const [aniMode, setAniMode] = useState(true);

  const url = makeURL(filter);
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
  if (pageLoading) return <div>loading...</div>;
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

const movieProps = {
  info: {
    page: 1,
    language: "ko",
    main: "movie",
    category: "popular",
  },
  headerProps: {
    options: [
      { name: "인기", category: "popular" },
      { name: "최고 평점", category: "top_rated" },
      { name: "현재 개봉중", category: "now_playing" },
    ],
    text: "영화",
  },
};
const tvProps = {
  info: {
    page: 1,
    language: "ko",
    main: "tv",
    category: "popular",
  },
  headerProps: {
    options: [
      { name: "인기", category: "popular" },
      { name: "현재 상영중", category: "on_the_air" },
      { name: "최고평점", category: "top_rated" },
    ],
    text: "TV",
  },
};

const LandingPage = () => {
  return (
    <>
      <LandingIntro/>
      <Item {...movieProps} />
      <Item {...tvProps} />
    </>
  );
};

export default LandingPage;
