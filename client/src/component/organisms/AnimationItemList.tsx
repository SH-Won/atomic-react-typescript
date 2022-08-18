import React from 'react';
import styled from 'styled-components';

interface flexProps {
    opacity?: number;
    transition?: string;
    mount?: boolean;
}
const FlexBox = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        width: 30%;
        height: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background: #ccc;
    }
    transition: all 0.5s linear;
    opacity: ${({ mount }: flexProps) => (mount ? '1' : '0')};
    pointer-events: ${({ mount }: flexProps) => (mount ? 'auto' : 'none')};
    cursor: pointer;
`;
export const LoadingAnimationItemList = ({ children }) => {
    return <FlexBox mount={true}> {children}</FlexBox>;
};

const AnimationItemList = ({ children, aniMode }: any) => {
    return <FlexBox mount={aniMode}>{children}</FlexBox>;
};

export default AnimationItemList;
