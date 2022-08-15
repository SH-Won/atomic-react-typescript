import React from "react";
import { API_KEY, MOVIE_URL } from '../../config';
import DetailIntro from '../component/organisms/DetailIntro';
import DetailItem from "../component/organisms/DetailItem";
import useFetch from "../hooks/useFetch";

// const infoEndpoint = `${MOVIE_URL}movie/${movieId}?api_key=${API_KEY}`
interface matchProps {
  params?: object;
}
const DetailPage = (props) => {
  const id = props.match.params.id;
  console.log(id);
  const url = `${MOVIE_URL}movie/${id}?api_key=${API_KEY}`
  const { posts: post, loading } = useFetch(url);
  console.log(post);
  if (loading) return <div>loading...</div>;

  return (
    <DetailIntro post={post}/>
  )
};

export default DetailPage;
