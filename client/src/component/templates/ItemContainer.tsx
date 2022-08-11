import React,{useState,useEffect,useMemo,useCallback} from 'react'
import ItemList from '../organisms/ItemList';
import useFetch from '../../hooks/useFetch'
import useScroll from '../../hooks/useScroll';
import {API_KEY,MOVIE_URL} from '../../../config'
import styled from 'styled-components';
import ContainerHeader from '../organisms/ContainerHeader';

const Wrapper = styled.div`
display:flex;
flex-direction:column;
`
const makeURL = (filter) => {
   const {category,language,page} = filter;
   return `${MOVIE_URL}${category}/popular?api_key=${API_KEY}&language=${language}&page=${page}`;
}

const headerProps = {
  options:[
    {name:'영화', category:'movie'},
    {name:'TV', category:'tv'},
  ],
  text : '인기',
  
}
const ItemContainer = ({info}) => {
    const [filter,setFilter] = useState({
        ...info
    })
    const [selectedOption,setSelectedOption] = useState(0);
    const url = makeURL(filter)
    const {loading,posts} = useFetch(url,filter.category);

    const loadMore = () =>{
      setFilter(prevQuery => ({...prevQuery , page:prevQuery.page+1}));
    }
    const handleSelect = (index : number, category : string) =>{
         setSelectedOption(index);
         const newFilter = {
           category,
           language:'ko',
           page:1
         };
         setFilter(newFilter);
    }

    const {lastIndexRef} = useScroll(loading,loadMore);
    if(loading) return <div>loading...</div>
  return (
     <Wrapper>
     <ContainerHeader {...headerProps} selected={selectedOption} onClick={handleSelect}/>
     <ItemList items={posts} lastIndexRef={lastIndexRef}/>
     </Wrapper>
  )
}

export default ItemContainer