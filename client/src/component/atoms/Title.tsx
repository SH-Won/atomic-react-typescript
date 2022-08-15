import React from 'react';
import styled, { css } from 'styled-components';

interface titleProps {
    size: string;
    text: string;
    fontSize?: string;
    fontWeight?: string;
    margin?: string;
}
interface p {
    [key: string]: string;
}

const CommonTitle = styled.h2<p>`
    ${props => css`
        font-size: ${props.fontSize};
        font-weight: ${props.fontWeight};
        margin: ${props.margin};
    `}
`;
const SmallTitle = styled.h3<p>`
    ${props => css`
        font-size: ${props.fontSize};
        font-weight: ${props.fontWeight};
        margin: ${props.margin};
    `}
`;
const LargeTitle = styled.h1<p>`
    ${props => css`
        font-size: ${props.fontSize};
        font-weight: ${props.fontWeight};
        margin: ${props.margin};
    `}
`;
const matchTitleSize = (size: string, text: string, fontSize, fontWeight, margin) => {
    const sizeProps = {
        fontSize,
        fontWeight,
        margin,
    };
    switch (size) {
        case 'small':
            return <SmallTitle {...sizeProps}>{text}</SmallTitle>;
        case 'large':
            return <LargeTitle {...sizeProps}>{text}</LargeTitle>;
        default:
            return <CommonTitle {...sizeProps}>{text}</CommonTitle>;
    }
};
const Title = ({ text, size, fontSize, fontWeight, margin }: titleProps) => {
    return <>{matchTitleSize(size, text, fontSize, fontWeight, margin)}</>;
};

export default Title;
