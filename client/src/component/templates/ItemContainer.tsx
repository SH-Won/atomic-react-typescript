import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import ContainerHeader from '../organisms/ContainerHeader';
import AnimationItemList from '../organisms/AnimationItemList';
import Item from '../molecules/Item';

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
    const lastIndex = posts.length - 1; 

    const renderItems = () => (
        <>
        {posts.map((item, index) => (
            <React.Fragment key={item.title || item.name}>
                <Item lastIndexRef={index === lastIndex ? lastIndexRef : null} item={item} />
            </React.Fragment>
        ))}
        </>
    )
    return (
        <Wrapper>
            <ContainerHeader {...headerProps} onClick={handleSelect} />
            <AnimationItemList  aniMode={aniMode} >
                {renderItems()}
             </AnimationItemList>
        </Wrapper>
    );
};

export default ItemContainer;
