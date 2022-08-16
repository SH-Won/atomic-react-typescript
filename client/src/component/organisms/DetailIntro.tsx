import React from 'react';
import { IMAGE_BASE_URL } from '../../../config';
import SplitScreen from '../../layout/SplitScreen';
import DetailInfo from '../molecules/DetailInfo';
import ItemImage from '../molecules/ItemImage';

const DetailIntro = ({ post }) => {
    console.log(post);
    const url = (IMAGE_BASE_URL + post.backdrop_path).replace(/w500/g, 'original');
    const backgroundImg = `url(${url})`;
    return (
        <>
            <SplitScreen leftWeight={1} rightWeight={2} backgroundColor={'#f5f5f5'}>
                <ItemImage src={post.poster_path} />
                <DetailInfo post={post} />
            </SplitScreen>
        </>
    );
};

export default DetailIntro;
