import React from 'react'
import styled from 'styled-components'
import Item from '../molecules/Item';
// interface itemProps{
//   category:number,
//   description: string,
//   imageUrl? : string,
//   imageUrls : string[],
//   title : string,
//   _id : string,
// }
interface itemProps{
  [key : string] : string | boolean | number | number[];
}
const FlexBox = styled.div`
display:flex;
flex-wrap : nowrap;
justify-content : flex-start;
align-items : center;
width:100%;
overflow-x : scroll;
overflow-y :hidden;
opacity : 1;
transition: opacity 1s;
`;

const ItemList = ({items,lastIndexRef} :any) => {
  const lastIndex = items.length - 1;
  console.log('itemList');
  return (
    <FlexBox >
        {items.map((item : itemProps,index : number) => <Item key={item._id} lastIndexRef={index === lastIndex ? lastIndexRef : null} item={item}/>)}
    </FlexBox>
  )
}

export default ItemList