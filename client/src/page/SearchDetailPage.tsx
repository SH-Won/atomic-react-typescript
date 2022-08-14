import React from 'react'
import { MOVIE_URL,API_KEY } from '../../config';
import CircleProgress from '../component/molecules/CircleProgress';
import useFetch from '../hooks/useFetch';
const SearchDetailPage = (props) => {
    const query = props.match.params.query;
    const url = `${MOVIE_URL}search/movie?api_key=${API_KEY}&query=${query}`;
    const {posts:movie,loading} = useFetch(url);

    if(loading) return <div>로딩 중입니다</div>

    console.log(movie);
  return (
    <CircleProgress percent={80}/>
  )
}

export default SearchDetailPage