import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import ItemImage from '../molecules/ItemImage';

const DetailBox = styled.article`
    display: flex;
    width: 70%;
    flex-direction: column;
    margin: 0 auto;
`;

const DetailItem = ({ post }) => {
    return (
        <DetailBox>
            <ItemImage src={post.imageUrls[0]} />
            <Title text={post.title} size={'large'} />
        </DetailBox>
    );
};

export default DetailItem;
