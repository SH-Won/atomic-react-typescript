import React,{useState,useEffect,useMemo,useCallback} from 'react'
import { Route } from 'react-router';
import Tab from '../component/molecules/Tab';
import ItemList from '../component/organisms/ItemList';
import useFetch from '../hooks/useFetch'
import useScroll from '../hooks/useScroll';

const linkItems = [{to:'/', name:'연예인'},{to:'/insta',name:'인스타'},{to:'/abroad',name:'해외'},{to:'/popular',name:'인기'}];

const LandingPage = () => {
    const [query,setQuery] = useState({
        language : 'ko',
        page : 1,
    })
    const {loading,posts} = useFetch(query);

    const loadMore = () =>{
      setQuery(prevQuery => ({...prevQuery , page:prevQuery.page+1}));
    }
    const {lastIndexRef} = useScroll(loading,loadMore);
    if(loading) return <div>loading...</div>
  return (
     <>
     <ItemList items={posts} lastIndexRef={lastIndexRef}/>
     {/* <Tab items={linkItems}/>
     <Route exact path='/'>
      <ItemList items={posts.filter(post => post.category === 1)}/>
     </Route>
     <Route path='/insta'>
      <ItemList items={posts.filter(post => post.category === 2)}/>
     </Route>
     <Route path='/abroad'>
      <ItemList items={posts.filter(post => post.category === 3)}/>
     </Route>
     <Route path='/popular'>
      <ItemList  items={posts.filter(post => post.category === 4)}/>
     </Route> */}
     
     </>
  )
}

export default LandingPage