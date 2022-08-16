import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Span = styled.span`
    margin: 0.5rem 0.3rem;
    width: fit-content;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid #d7d7d7;
    color: #000;
    padding: 4px 10px;
    border-radius: 4px;
`;
const DetailContentRight = ({ post }) => {
    return (
        <Container>
            <h2>원제</h2>
            <Span>{post.original_title || post.original_name}</Span>
            <h2>상태</h2>
            <Span>{post.status}</Span>
            <h2>원어</h2>
            <Div>
                {post.spoken_languages.map(lang => (
                    <Span key={lang.name}>{lang.name}</Span>
                ))}
            </Div>
            <h2>제작비</h2>
            <Span>{post.budget !== 0 ? post.budget : '-'}</Span>
            <h2>수익</h2>
            <Span>{post.revenue !== 0 ? post.revenue : '-'}</Span>
            <h2>키워드</h2>
            <Span>-</Span>
        </Container>
    );
};

export default DetailContentRight;
