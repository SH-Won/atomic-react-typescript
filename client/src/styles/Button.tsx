import React from 'react';
import styled, { css } from 'styled-components';
import { palette, PaletteKeyTypes } from './style';

interface ButtonStyle {
    width?: string;
    height?: string;
    buttonColor?: PaletteKeyTypes;
    hasBorder?: boolean;
    borderColor?: PaletteKeyTypes;
    borderRadius?: string;
    fontColor?: PaletteKeyTypes;
    fontSize?: string;
}

export const Button = styled.button<ButtonStyle>`
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    ${({
        width = 'auto',
        height = 'auto',
        buttonColor = 'white',
        hasBorder = false,
        borderColor = 'white',
        borderRadius = '4px',
        fontColor = 'black',
        fontSize = '14px',
    }) => css`
        width: ${width};
        height: ${height};
        background-color: ${palette[buttonColor]};
        border: ${hasBorder ? `1px solid ${palette[borderColor]}` : 'none'};
        border-radius: ${borderRadius};
        color: ${palette[fontColor]};
        font-size: ${fontSize};
    `}
`;
