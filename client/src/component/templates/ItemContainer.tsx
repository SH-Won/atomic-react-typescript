import React from 'react';
import styled from 'styled-components';
import ContainerHeader, { LoadingContainerHeader } from '../organisms/ContainerHeader';
import AnimationItemList, { LoadingAnimationItemList } from '../organisms/AnimationItemList';
import Item, { LoadingItem } from '../molecules/Item';

interface WrapperProps {
    backgroundColor?: string;
}
const Wrapper = styled.section<WrapperProps>`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: ${props => props.backgroundColor};
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

export const LoadingItemContainer = ({ containerProps, domRef }) => {
    const renderItems = () =>
        Array(7)
            .fill(0)
            .map((v, i) => (
                <React.Fragment key={v + i}>
                    <LoadingItem />
                </React.Fragment>
            ));

    return (
        <Wrapper ref={domRef} backgroundColor={containerProps.backgroundColor}>
            <LoadingContainerHeader {...containerProps.header} />
            <LoadingAnimationItemList>{renderItems()}</LoadingAnimationItemList>
        </Wrapper>
    );
};

const ItemContainer = ({ domRef, posts, containerProps, category, handleSelect, lastIndexRef, aniMode }) => {
    const lastIndex = posts.length - 1;

    const renderItems = () => (
        <>
            {posts.map((item, index) => (
                <React.Fragment key={item.title || item.name}>
                    <Item category={category} lastIndexRef={index === lastIndex ? lastIndexRef : null} item={item} />
                </React.Fragment>
            ))}
        </>
    );
    return posts.length > 0 ? (
        <Wrapper backgroundColor={containerProps.backgroundColor}>
            <ContainerHeader {...containerProps.header} onClick={handleSelect} />
            <AnimationItemList aniMode={aniMode}>{renderItems()}</AnimationItemList>
        </Wrapper>
    ) : (
        <LoadingItemContainer containerProps={containerProps} domRef={domRef} />
    );
};

export default ItemContainer;
