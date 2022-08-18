import React from 'react';
import ItemContainer from '../component/templates/ItemContainer';
import LandingIntro from '../component/organisms/LandingIntro';
import * as Props from './LandingProps';

import withFetch from '../hoc/withFetch';

const ItemSection = withFetch(ItemContainer);

const LandingPage = () => {
    return (
        <>
            <LandingIntro />
            <ItemSection {...Props.movieProps} />
            <ItemSection {...Props.tvProps} />
            <ItemSection {...Props.upcommingProps} />
            <ItemSection {...Props.trendingProps} />
        </>
    );
};

export default LandingPage;
