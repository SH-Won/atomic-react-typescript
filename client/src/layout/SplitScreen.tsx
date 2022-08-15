import React from 'react';
import styled from 'styled-components';

interface PaneProps {
    flexWeight?: number;
}
const Container = styled.section`
    display: flex;
`;
const Pane = styled.div<PaneProps>`
    flex: ${props => props.flexWeight};
    padding: 2rem;
`;

export const SplitScreen = ({ children, leftWeight = 1, rightWeight = 1 }) => {
    const [left, right] = children;
    return (
        <Container>
            <Pane flexWeight={leftWeight}>
                {left}
            </Pane>
            <Pane flexWeight ={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
};

export default SplitScreen;
