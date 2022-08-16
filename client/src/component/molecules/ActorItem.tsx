import React from 'react';
import styled from 'styled-components';
import ItemImage from './ItemImage';

const ItemCard = styled.article`
    display: flex;
    flex-direction: column;
    flex: 0 0 30%;
    max-width: 150px;
    min-width: 100px;
    margin: 1rem;
    align-content: center;
    /* min-width: 200px; */
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    background-color: #fff;
    border-radius: 1rem;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem;
`;

const ActorItem = ({ item }) => {
    return (
        <ItemCard>
            <ItemImage src={item.profile_path} />
            <Content>
                <span style={{ fontSize: '1rem' }}>{item.original_name}</span>
                <span style={{ fontSize: '.8rem', color: 'gray' }}>{item.character}</span>
            </Content>
        </ItemCard>
    );
};

export default ActorItem;
