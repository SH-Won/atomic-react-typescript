import React, { ReactDOM, ReactElement } from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import ItemImage from "./ItemImage";
import { Link } from "react-router-dom";
import CircleProgress from "./CircleProgress";

const ItemCard = styled.article`
  display: flex;
  flex-direction: column;
  flex: 0 0 12%;
  max-width: 150px;
  margin: 1rem;
  min-width: 200px;
  transition: opacity 0.5s;
`;
const Content = styled.div`
  display: flex;
  align-content: flex-start;
  position: relative;
  padding: 2rem 0 0 1rem;
  width: 100%;
`;
const PercentWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: 10px;
`;
//vote_average
const Item = ({ item, lastIndexRef }: any) => {
  return (
    <ItemCard ref={lastIndexRef}>
      <Link to={`/posts/${item.id}`}>
        <ItemImage src={item.poster_path} />
        <Content>
          <PercentWrapper>
            <CircleProgress percent={item.vote_average * 10} />
          </PercentWrapper>
          <Title
            size={""}
            text={item.title || item.name}
            fontSize={"1rem"}
            fontWeight={""}
          />
        </Content>
      </Link>
    </ItemCard>
  );
};

export default Item;
