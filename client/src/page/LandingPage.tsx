import React from 'react';

import LandingIntro from '../component/organisms/LandingIntro';
import ItemContainer from '../component/templates/ItemContainer';

import * as config from '../config/landingPageConfig';
import withFetch from '../hoc/withFetch';

const ItemSection = withFetch(ItemContainer);

const LandingPage = () => {
    return (
        <>
            <LandingIntro />
            <ItemSection {...config.MOVIE} />
            <ItemSection {...config.TV} />
            <ItemSection {...config.UPCOMING} />
            <ItemSection {...config.TRENDING} />
        </>
    );
};

export default LandingPage;
