import React,{useState,useEffect,useMemo} from 'react'
import { Route } from 'react-router';
import Tab from '../component/molecules/Tab';
import ItemList from '../component/organisms/ItemList';
import useFetch from '../hooks/useFetch'

const linkItems = [{to:'/', name:'연예인'},{to:'/insta',name:'인스타'},{to:'/abroad',name:'해외'},{to:'/popular',name:'인기'}];

const LandingPage = () => {
    const {loading,posts} = useFetch('');
    console.log(posts);
    if(loading) return <div>loading...</div>
  return (
     <>
     <Tab items={linkItems}/>
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
      <ItemList items={posts.filter(post => post.category === 4)}/>
     </Route>
     
     </>
  )
}

export default LandingPage