import React, { useState,useLayoutEffect, useRef, useEffect } from "react";
import styled, { keyframes,css } from "styled-components";
import Item from "../molecules/Item";
// interface itemProps{
//   category:number,
//   description: string,
//   imageUrl? : string,
//   imageUrls : string[],
//   title : string,
//   _id : string,
// }
// interface itemProps{
//   [key : string ]: string | boolean | number | number[] ;
  
// }
const fadeInOut = keyframes`
0%{
  opacity:1;
}
50% {
  opacity : 0;
}
100 %{
  opacity:1;
}
`
interface flexProps{
  opacity? : number;
  transition? : string;
  mount? : boolean
}
const FlexBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  
  &::-webkit-scrollbar {
    width: 30%;
    height: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #ccc;
  }
  transition : all 1s linear;
   opacity : ${({mount} : flexProps) => mount ? '1' : '0'}
  
  
`;

const ItemList = ({ items, lastIndexRef }: any) => {
  const [mount,setMount] = useState(false)
  const [renders,setRenders] = useState([]);
  const [visible,setVisible] =useState(false);
  const flexBoxRef = useRef<HTMLDivElement>();
  const lastIndex = items.length - 1;
  
  // useLayoutEffect(() =>{
  //   //  mount.current = true;
  //    setMount(true);
  //    return () => {
  //      console.log('layout unmount')
       
  //    }
  // },[items])

  useEffect(() =>{
    setMount(true);
    setTimeout(()=>{
    setRenders(items)
    },500)
    
    return () => {
      console.log('unmount')
      setTimeout(() =>{
        setMount(false);
      },0)
      
    }
  },[items]);
  
  // console.log(items);

  const renderItems = (mount) => (
    <FlexBox ref={flexBoxRef} mount={mount}>
      {renders.map((item, index) => (
        <React.Fragment key={item.title || item.name}>
        <Item
          lastIndexRef={index === lastIndex ? lastIndexRef : null}
          item={item}
        />
        </React.Fragment>
      ))}
    </FlexBox>
  )

  //  console.log(mount,'itemList');
  return (
    <>
    {renderItems(mount)}
    {console.log(mount)}
    </>
  );
};

export default ItemList;
