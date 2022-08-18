import React, { ReactDOM, ReactElement } from 'react';
import styled, { css, keyframes } from 'styled-components';
import Title from '../atoms/Title';
import ItemImage from './ItemImage';
import { Link } from 'react-router-dom';
import CircleProgress from './CircleProgress';

interface ItemCardProps {
    isLoading?: boolean;
}
const fadeInOut = keyframes`
0%{
    opacity: 1;
}
50%{
    opacity: 0.2;
}
100%{
    opacity : 1;
}
`;
const ItemCard = styled.article<ItemCardProps>`
    display: flex;
    flex-direction: column;
    flex: 0 0 12%;
    max-width: 150px;
    margin: 1rem;
    min-width: 200px;
    ${props =>
        props.isLoading &&
        css`
            background-color: #f5f5f5;
            animation: ${fadeInOut} 1s ease infinite;
            border-radius: 1rem;
        `}
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

export const LoadingItem = () => {
    return (
        <ItemCard isLoading={true}>
            <ItemImage src={null} />
            <Content>
                <PercentWrapper>{/* <CircleProgress percent={item.vote_average * 10} /> */}</PercentWrapper>
            </Content>
        </ItemCard>
    );
};
const Item = ({ item, category, lastIndexRef = null }: any) => {
    return (
        <ItemCard ref={lastIndexRef}>
            <Link to={`/${category}/${item.id}`}>
                <ItemImage src={item.poster_path} />
                <Content>
                    <PercentWrapper>
                        <CircleProgress percent={Math.floor(item.vote_average * 10)} />
                    </PercentWrapper>
                    <Title size={''} text={item.title || item.name} fontSize={'1rem'} fontWeight={''} />
                </Content>
            </Link>
        </ItemCard>
    );
};

export default Item;
