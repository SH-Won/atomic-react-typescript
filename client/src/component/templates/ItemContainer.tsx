import React,{useState,useEffect,useMemo,useCallback} from 'react'
import styled from 'styled-components';
import ContainerHeader from '../organisms/ContainerHeader';
import ItemList from '../organisms/ItemList';

const Wrapper = styled.div`
display:flex;
flex-direction:column;
`

const ItemContainer = ({posts,headerProps,handleSelect,lastIndexRef}) => {
  return (
     <Wrapper>
     <ContainerHeader {...headerProps}  onClick={handleSelect}/>
     <ItemList items={posts} lastIndexRef={lastIndexRef}/>
     </Wrapper>
  )
}

export default ItemContainer