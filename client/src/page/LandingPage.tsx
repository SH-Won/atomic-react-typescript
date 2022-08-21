import React from 'react';
import ItemContainer from '../component/templates/ItemContainer';
import LandingIntro from '../component/organisms/LandingIntro';
import * as Props from './LandingProps';

import withFetch from '../hoc/withFetch';

const ItemSection = withFetch(ItemContainer);

// button 과 같은 정말 자주 쓰이는것은 재사용 할 만 하지만
// 진짜 정말 재사용이 가능 할까? 당장 가지고 있는 것중 하나만 빠져도 React children 이 아닌 이상
// 컴포넌트를 다시 만들어야 할텐데
// 스타일을 위한 재사용이라면 재사용이 매우 효율적이라고 생각하지만, 그렇다면 styled components 를 쓸 이유가 있을까?
// css module 이라는 굉장히 좋은 시스템이 있는데

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
