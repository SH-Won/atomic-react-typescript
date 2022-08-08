import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import ItemImage from "./ItemImage";
import {Link} from 'react-router-dom';

interface ItemProps extends Object{
    title? : string,
    imageUrls? : string[];
}
const ItemCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin:1rem;
`;

const Item = ({item}) => {
  return (

    <ItemCard key={item._id} >
      <Link to={`/posts/${item._id}`}>
       <ItemImage src={item.imageUrls[0]} />
       <Title size={"large"} text={item.title} />
      </Link>
    </ItemCard>
    
  );
};

export default Item;
