import { useState, useEffect } from "react";
import { MOVIE_URL, API_KEY } from "../../config";

// const fullURL = `https://blog-sh.herokuapp.com/api/posts/${url}`;
// const fullURL = `http://localhost:5000/api/posts/${url}`
// const infoEndpoint = `${MOVIE_URL}movie/${movieId}?api_key=${API_KEY}`
const useFetch = (url, filterCategory) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState(null);
  const fetchData = async () => {
    try {
      // const fullURL = `${MOVIE_URL}movie/popular?api_key=${API_KEY}&language=${query.language}&page=${query.page}`
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        if (category === filterCategory) {
          setPosts((prevPost) => [...prevPost, ...json.results]);
        } else {
          setPosts(json.results);
        }
        setCategory(filterCategory);
        setLoading(false);
      }
    } catch (e) {}
  };
  const fetchDetailData = async () => {};
  useEffect(() => {
    fetchData();
  }, [url]);
  console.log(posts);
  return {
    loading,
    posts,
  };
};

export default useFetch;
