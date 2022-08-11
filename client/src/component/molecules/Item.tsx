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
  flex: 0 0 20%;
  margin:1rem;
`;

const Item = ({item,lastIndexRef} : any) => {
  return (

    <ItemCard key={item.id} ref={lastIndexRef}>
      <Link to={`/posts/${item.id}`}>
       <ItemImage src={item.poster_path} />
       <Title size={"small"} text={item.title} />
      </Link>
    </ItemCard>
    
  );
};

export default Item;
