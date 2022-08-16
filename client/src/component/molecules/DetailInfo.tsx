import React from 'react';
import styled from 'styled-components';
import CircleProgress from './CircleProgress';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
const Div = styled.div`
    margin: 0.3rem 0;
    display: flex;
    justify-content: flex-start;
`;
const Genre = styled.span`
    margin-right: 0.5rem;
    font-weight: 500;
`;
const TagLine = styled.span`
    font-style: italic;
    opacity: 0.7;
    font-weight: 600;
`;

const DetailInfo = ({ post }) => {
    const {
        title,
        genres,
        production_companies,
        overview,
        original_title,
        vote_average,
        tagline,
        status,
        runtime,
        release_date,
        original_name,
    } = post;
    return (
        <Container>
            <h1>{original_title || original_name}</h1>
            <Div>
                {genres.map((genre, index) => (
                    <Genre key={genre.id + index}>{genre.name}</Genre>
                ))}
            </Div>
            <Div>
                <CircleProgress percent={Math.floor(vote_average * 10)} />
            </Div>
            <TagLine>{tagline}</TagLine>
            <h2 style={{ margin: '1rem 0' }}>개요</h2>
            <p>{overview !== '' ? overview : '없음'}</p>
        </Container>
    );
};

export default DetailInfo;
