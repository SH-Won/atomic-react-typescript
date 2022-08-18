import React from 'react';
import styled, { css } from 'styled-components';

//    background-size: cover;
// background-repeat: no-repeat;
// background-image: url(/t/p/w1920_and_h800_multi_faces/suopoADq0k8YZr4dQXcU6pToj6s.jpg);

interface PaneProps {
    flexWeight?: number;
}
interface ContainerProps {
    backgroundSize?: string;
    backgroundRepeat?: string;
    backgroundImg?: string;
    backgroundColor?: string;
}
const Container = styled.section<ContainerProps>`
    display: flex;
    width: 100%;
    ${props => css`
        background-size: cover;
        background-repeat: no-repeat;
        background-image: ${props.backgroundImg};
        background-color: ${props.backgroundColor};
    `}
`;
const Pane = styled.div<PaneProps>`
    flex: ${props => props.flexWeight};
    overflow: auto;
    padding: 2rem;
`;

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1, backgroundColor = '' }) => {
    const [left, right] = children;
    return (
        <Container backgroundColor={backgroundColor}>
            <Pane flexWeight={leftWeight}>{left}</Pane>
            <Pane flexWeight={rightWeight}>{right}</Pane>
        </Container>
    );
};

export default SplitScreen;
