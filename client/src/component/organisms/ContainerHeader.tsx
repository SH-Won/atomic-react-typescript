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

export const LoadingContainerHeader = ({options,text}) =>{
    return (
       <Wrapper>
            <Title text={text} size={'large'} />
            <LoadingOptionBar options={options}  />
        </Wrapper>
        )
}
const ContainerHeader = ({ options, text, onClick }) => {
    return (
        <Wrapper>
            <Title text={text} size={'large'} />
            <OptionBar options={options} onClick={onClick} />
        </Wrapper>
    );
};

export default ContainerHeader;
