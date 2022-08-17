import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    border: 1px solid ${props => props.theme.darkBlue};
    justify-content: flex-start;
    align-content: center;
    align-items: stretch;
    border-radius: 30px;
    margin: 0 0 0 1rem;
`;
const List = styled.div`
    position: relative;
    border-radius: 30px;
    padding: 0.25rem 0.75rem;
    box-sizing: border-box;
`;
interface SelectProps {
    selected?: boolean;
    left?: string;
    width?: string;
}
const Title = styled.h3`
    background: ${(props: SelectProps) =>
        props.selected ? 'linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)' : 'black'};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.9rem;
`;
const ItemBackGround = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-color: ${props => props.theme.darkBlue};
    border-radius: 30px;
    transition: all 0.3s linear;
    width: ${(props: SelectProps) => props.width};
    left: ${(props: SelectProps) => props.left};
`;
//cubic-bezier(0, 1.42, 0.81, 1.02)
// visibility ${(props : SelectProps) => props.selected ? 'visible' : 'hidden'};
export const LoadingOptionBar = ({options}) =>{
    return (
        <Wrapper >
            {options.map((option, index) => (
                <List key={option.name} >
                    <Title selected={index === 0 ? true : false}>{option.name}</Title>
                </List>
            ))}
           
        </Wrapper>

    )
}
const OptionBar = ({ options, onClick }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [childLeft, setChildLeft] = useState(null);
    const [childWidth, setChildWidth] = useState(null);
    const optionRefs = useRef<HTMLDivElement>();

    const handleSelected = (index: number, category: string) => {
        if (selectedIndex === index) return;
        setSelectedIndex(index);
        onClick(category);
    };

    useLayoutEffect(() => {
        const { current } = optionRefs;
        const childLeftSize = {};
        const childWidthSize = {};
        current.childNodes.forEach((element, index) => {
            childLeftSize[index] = element['offsetLeft'];
            childWidthSize[index] = element['offsetWidth'];
        });
        setChildLeft(childLeftSize);
        setChildWidth(childWidthSize);
    }, []);

    return (
        <Wrapper ref={optionRefs}>
            {options.map((option, index) => (
                <List key={option.name} onClick={() => handleSelected(index, option.category)}>
                    <Title selected={selectedIndex === index ? true : false}>{option.name}</Title>
                </List>
            ))}
            {childWidth && (
                <ItemBackGround width={`${childWidth[selectedIndex] + 2}px`} left={`${childLeft[selectedIndex]}px`} />
            )}
        </Wrapper>
    );
};

export default OptionBar;
