import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import OptionBar, { LoadingOptionBar } from '../molecules/OptionBar';

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    margin: 0.8rem 1rem;
`;

export const LoadingContainerHeader = ({
    options,
    text,
    textColor,
    optionColor,
    optionSelectedColor,
    optionBackGroundColor,
}) => {
    const optionBarProps = {
        options,
        optionColor,
        optionSelectedColor,
        optionBackGroundColor,
    };
    return (
        <Wrapper>
            <Title text={text} size={'large'} color={textColor} />
            <LoadingOptionBar {...optionBarProps} />
        </Wrapper>
    );
};
const ContainerHeader = ({
    options,
    text,
    onClick,
    textColor,
    optionColor,
    optionSelectedColor,
    optionBackGroundColor,
}) => {
    const optionBarProps = {
        options,
        optionColor,
        optionSelectedColor,
        optionBackGroundColor,
        onClick,
    };
    return (
        <Wrapper>
            <Title text={text} size={'large'} color={textColor} />
            <OptionBar {...optionBarProps} />
        </Wrapper>
    );
};

export default ContainerHeader;
