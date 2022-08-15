import React from 'react';
import styled from 'styled-components';

const CommonButton = styled.button`
    background: ${props => props.theme.darkBlue};
    color: rgb(255, 255, 255);
    display: inline-block;
    border-radius: 10px;
    padding: 16px 24px 16px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    border: 0px;
    cursor: pointer;
    user-select: none;
    transition: transform 200ms ease 0s, background 200ms ease 0s;
    text-align: center;
    vertical-align: middle;
`;
const Button = ({ text }) => {
    return <CommonButton>{text}</CommonButton>;
};

export default Button;
