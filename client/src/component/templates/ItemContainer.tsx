import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import ContainerHeader from '../organisms/ContainerHeader';
import AnimationItemList from '../organisms/AnimationItemList';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin: 1rem;
`;

// ::after{
//   transition: linear 0.3s;
//   opacity: 1;
// }
// ::after{
//   content:'';
//   width:60px;
//   height:100%;
//   position:absolute;
//   top:0;
//   right:0;
//   background-image : linear-gradient(to right, rgba(255,255,255,0) 0%, #fff 100%);
//   will-change : opacity;
//   pointer-events : none;
// }
const ItemContainer = ({ posts, headerProps, handleSelect, lastIndexRef, aniMode }) => {
    return (
        <Wrapper>
            <ContainerHeader {...headerProps} onClick={handleSelect} />
            <AnimationItemList items={posts} lastIndexRef={lastIndexRef} aniMode={aniMode} />
        </Wrapper>
    );
};

export default ItemContainer;
