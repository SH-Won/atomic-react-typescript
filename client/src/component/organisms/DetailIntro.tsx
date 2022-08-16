import React from 'react';
import { IMAGE_BASE_URL } from '../../../config';
import SplitScreen from '../../layout/SplitScreen';
import DetailInfo from '../molecules/DetailInfo';
import ItemImage from '../molecules/ItemImage';

const DetailIntro = ({ post }) => {
    // url(/t/p/w1920_and_h800_multi_faces/suopoADq0k8YZr4dQXcU6pToj6s.jpg)
    console.log(post);
    const backgroundImg = `url(${IMAGE_BASE_URL}${post.backdrop_path})`
    return (
        <>
            <SplitScreen leftWeight={1} rightWeight={2} backgroundImg={backgroundImg}>
                <ItemImage src={post.poster_path} />
                <DetailInfo post={post} />
            </SplitScreen>
        </>
    );
};

export default DetailIntro;
