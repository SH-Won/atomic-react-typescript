import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState([]);

    const fetchData = async () => {
        try{
            // const fullURL = `https://blog-sh.herokuapp.com/api/posts/${url}`;
            const fullURL = `http://localhost:5000/api/posts/${url}`
            console.log(fullURL);
            const res = await fetch(fullURL);
            if(res.ok){
                const json = await res.json();
                setPosts(json.length === 1 ? json[0] : json.posts);
                setLoading(false);
            }
        }catch(e){

        }
    }
    useEffect(()=>{
        console.log('1');
        fetchData();
    },[])

  return {
      loading,
      posts
  }
}

export default useFetch