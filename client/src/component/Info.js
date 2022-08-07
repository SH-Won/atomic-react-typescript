import React,{useState,useEffect} from 'react'
import useFetch from '../hooks/useFetch'

const Info = () => {
  const [pageLoading,setPageLoading] = useState(true);
  const {loading,posts} = useFetch('');

  useEffect(()=>{
     console.log(loading,'useEffect');
     if(!loading) setPageLoading(false);
  },[loading])
  
  return (
    <>
    {pageLoading ? <div>loading...</div> 
    :
    <div>success data fetch {console.log(posts)}</div>
    }
    </>
  )
}

export default Info