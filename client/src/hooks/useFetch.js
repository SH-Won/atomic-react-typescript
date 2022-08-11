import {useState,useEffect} from 'react'
import { MOVIE_URL,API_KEY } from '../../config';

// const infoEndpoint = `${MOVIE_URL}movie/${movieId}?api_key=${API_KEY}`
const useFetch = (query) => {
    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState([]);
    const fetchData = async () => {
        try{
            // const fullURL = `https://blog-sh.herokuapp.com/api/posts/${url}`;
            // const fullURL = `http://localhost:5000/api/posts/${url}`
            const queryString = Object.keys(query);
            const fullURL = `${MOVIE_URL}movie/popular?api_key=${API_KEY}&language=${query.language}&page=${query.page}`
            console.log(fullURL);
            const res = await fetch(fullURL);
            if(res.ok){
                const json = await res.json();
                setPosts(prevPost => [...prevPost,...json.results]);
                setLoading(false);
            }
        }catch(e){

        }
    }
    const fetchDetailData = async () => {
        
    }
    useEffect(()=>{
        fetchData();
    },[query])
    console.log(posts);
  return {
      loading,
      posts
  }
}

export default useFetch