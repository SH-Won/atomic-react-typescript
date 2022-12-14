import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SplitScreen from '../../layout/SplitScreen';
import { MOVIE_URL, API_KEY } from '../../../config';
import useFetch from '../../hooks/useFetch';
import ActorItem from '../molecules/ActorItem';
import AnimationItemList from './AnimationItemList';
import Title from '../atoms/Title';
import DetailContentRight from '../molecules/DetailContentRight';

interface ItemProps {
    id: number;
    cast: Object[];
    crew: Object[];
}
const LoadMoreBtn = styled.button`
    border-radius: 50%;
    flex: 0 0 10%;
    max-height: 100px;
    height: 60px;
    margin: 1rem;
    align-self: center;
    border: transparent;
    background: ${props => props.theme.darkBlue};
    color: ${props => props.theme.white};
`;

const DetailContent = ({ post, id, category }) => {
    const url = `${MOVIE_URL}${category}/${id}/credits?api_key=${API_KEY}`;
    const { posts: items, loading } = useFetch(url);
    const [itemLength, setItemLength] = useState(5);

    if (loading) return <div>로딩중 입니다</div>;

    const castLength = items['cast'].length;
    console.log(items);
    const renderItems = () => (
        <>
            {items['cast'].slice(0, itemLength).map(castItem => (
                <React.Fragment key={castItem.id}>
                    <ActorItem item={castItem} />
                </React.Fragment>
            ))}
        </>
    );

    const loadMoreCasts = () => {
        setItemLength(prevLength => prevLength + 5);
    };
    return (
        <SplitScreen leftWeight={2.5} rightWeight={1}>
            <div>
                <Title size={'large'} text={'출연진'} />
                <AnimationItemList aniMode={true}>
                    {renderItems()}
                    {itemLength < castLength && <LoadMoreBtn onClick={loadMoreCasts}>더 보기</LoadMoreBtn>}
                </AnimationItemList>
            </div>
            <DetailContentRight post={post} />
        </SplitScreen>
    );
};

export default DetailContent;
