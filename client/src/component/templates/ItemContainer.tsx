import React from 'react';
import styled from 'styled-components';
import ContainerHeader, { LoadingContainerHeader } from '../organisms/ContainerHeader';
import AnimationItemList, { LoadingAnimationItemList } from '../organisms/AnimationItemList';
import Item, { LoadingItem } from '../molecules/Item';


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

export const LoadingItemContainer = ({headerProps}) =>{

    const renderItems = () => (
        Array(5).fill(0).map((v,i) => (
            <React.Fragment key={v+i}>
            <LoadingItem />
            </React.Fragment>
        ))
    )
    return (
        <Wrapper>
            <LoadingContainerHeader {...headerProps}/>
            <LoadingAnimationItemList>
                {renderItems()}
            </LoadingAnimationItemList>
        </Wrapper>
    )
}
const ItemContainer = ({ posts, headerProps, category, handleSelect, lastIndexRef, aniMode }) => {
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
    return (
        <Wrapper>
            <ContainerHeader {...headerProps} onClick={handleSelect} />
            <AnimationItemList aniMode={aniMode}>{renderItems()}</AnimationItemList>
        </Wrapper>
    );
};

export default ItemContainer;
