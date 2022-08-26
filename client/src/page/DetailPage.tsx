import React from 'react';
import { API_KEY, MOVIE_URL } from '../../config';
import DetailContent from '../component/organisms/DetailContent';
import DetailIntro from '../component/organisms/DetailIntro';

import useFetch from '../hooks/useFetch';

const DetailPage = props => {
    const [, category, id] = props.match.url.split('/');
    const url = `${MOVIE_URL}${category}/${id}?api_key=${API_KEY}`;
    const { posts: post, loading } = useFetch(url);

    if (loading) return <div>loading...</div>;

    return (
        <>
            <DetailIntro post={post} />
            <DetailContent post={post} id={id} category={category} />
        </>
    );
};

export default DetailPage;
