import React from 'react';
import styled, { css } from 'styled-components';
import {
    layout,
    position,
    PositionProps,
    color,
    ColorProps,
    flexbox,
    SpaceProps,
    space,
    FlexboxProps,
    BackgroundColorProps,
    backgroundColor,
} from 'styled-system';

export const palette = {
    red: '#FF0000',
    orange: '#FFA500',
    yellow: '#FFFF00',
    green: '#008000',
    blue: '#0000FF',
    indigo: '#4B0082',
    violet: '#EE82EE',
    white: '#FFFFFF',
    black: '#000000',
};
export type PaletteKeyTypes = keyof typeof palette;

interface WrapProps {
    width?: string;
    boxSizing: string;
    display?: string;
    flexWrap?: string;
    justifyContent: string;
}
interface LayOutProps extends WrapProps {
    children: React.ReactNode;
}
const Wrap = styled.div<WrapProps>`
    ${({ width = '100%', boxSizing = 'border-box', display, flexWrap, justifyContent }) => css`
        width: ${width};
        box-sizing: ${boxSizing};
        display: ${display};
        flex-wrap: ${flexWrap};
        justify-content: ${justifyContent};
    `}
`;
interface ImageContainer {
    paddingTop?: string;
    position?: string;
    width?: string;
    key?: string;
}
interface Image {
    position?: string;
    top?: string;
    width?: string;
    height?: string;
    src?: string;
}
export const ImageContainer = styled.figure<ImageContainer>`
    ${({ paddingTop, position = 'relative', width, key }) => css`
        padding-top: ${paddingTop};
        position: ${position};
        width: ${width};
        ${key}
    `}
`;
export const ImageElement = styled.img<Image>`
    ${({ position = 'absolute', top = 0, width = '100%', height = '100%', src }) => css`
        position: ${position};
        top: ${top};
        width: ${width};
        height: ${height};
        ${src}
    `}
`;

export const Layout = ({ children, ...props }: LayOutProps) => <Wrap {...props}>{children}</Wrap>;

// export const Box = ({ children, ...props }: Props) => (
//   <Container {...props}>{children}</Container>
// );
// export const FlexBox = ({children , ... props} :ContainerProps) =>(
//     <FlexContainer {...props}>{children}</FlexContainer>
// )
