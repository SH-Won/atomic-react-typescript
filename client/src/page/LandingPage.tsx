import React,{useState,useEffect,useMemo,useCallback} from 'react'
import ItemContainer from '../component/templates/ItemContainer';

const LandingPage = () => {
    // const [filter,setFilter] = useState({
    //     category:'movie',
    //     language : 'ko',
    //     page : 1,
    // })
    // const url = makeURL(filter)
    // const {loading,posts} = useFetch(url);

    // const loadMore = () =>{
    //   setFilter(prevQuery => ({...prevQuery , page:prevQuery.page+1}));
    // }

    // const {lastIndexRef} = useScroll(loading,loadMore);
    // if(loading) return <div>loading...</div>
    const popularInfo = {
      category:'movie',
        language : 'ko',
        page : 1,
    }
  return (
     <>
     <ItemContainer info={popularInfo}/> 
     </>
  )
}

export default LandingPage