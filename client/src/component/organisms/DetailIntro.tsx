import React from 'react';
import { IMAGE_BASE_URL } from '../../../config';
import SplitScreen from '../../layout/SplitScreen';
import Image from '../atoms/Image';
import DetailInfo from '../molecules/DetailInfo';

const DetailIntro = ({ post }) => {
    const url = (IMAGE_BASE_URL + post.backdrop_path).replace(/w500/g, 'original');

    return (
        <>
            <SplitScreen leftWeight={1} rightWeight={2} backgroundColor={'#f5f5f5'}>
                <Image src={post.poster_path} aspectRatio={13 / 10} />
                <DetailInfo post={post} />
            </SplitScreen>
        </>
    );
};

export default DetailIntro;
