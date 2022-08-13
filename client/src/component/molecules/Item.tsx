import React, { ReactDOM, ReactElement } from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import ItemImage from "./ItemImage";
import { Link } from "react-router-dom";



const ItemCard = styled.article`
  display: flex;
  flex-direction: column;
  flex: 0 0 12%;
  max-width: 150px;
  margin: 1rem;
  min-width: 200px;
  transition : opacity .5s;
 
`;

const Item = ({ item, lastIndexRef }: any) => {
  return (
    <ItemCard  ref={lastIndexRef} >
      <Link to={`/posts/${item.id}`}>
        <ItemImage src={item.poster_path} />
        <Title size={""} text={item.title || item.name} fontSize={'0.7rem'} fontWeight={''}/>
      </Link>
    </ItemCard>
  );
};

export default Item;
