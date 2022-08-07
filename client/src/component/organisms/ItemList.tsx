import React from 'react'
import styled from 'styled-components'
import Item from '../molecules/Item';

const FlexBox = styled.div`
display:flex;
flex-wrap : wrap;
justify-content : center;
width:100%;
height:100%;
`;

const ItemList = ({items}) => {
  return (
    <FlexBox>
        {items.map((item : object) => <Item item={item}/>)}
    </FlexBox>
  )
}

export default ItemList