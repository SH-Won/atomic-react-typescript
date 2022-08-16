import React from 'react';
import { API_KEY, MOVIE_URL } from '../../config';
import DetailContent from '../component/organisms/DetailContent';
import DetailIntro from '../component/organisms/DetailIntro';
import DetailItem from '../component/organisms/DetailItem';
import useFetch from '../hooks/useFetch';

// const infoEndpoint = `${MOVIE_URL}movie/${movieId}?api_key=${API_KEY}`
interface matchProps {
    params?: object;
}
const DetailPage = props => {
    const [, category, id] = props.match.url.split('/');
    // const id = props.match.params.id;
    const url = `${MOVIE_URL}${category}/${id}?api_key=${API_KEY}&language=ko`;
    const { posts: post, loading } = useFetch(url);
    console.log(post);
    if (loading) return <div>loading...</div>;

    return (
        <>
            <DetailIntro post={post} />
            <DetailContent id={id} />
        </>
    );
};

export default DetailPage;
