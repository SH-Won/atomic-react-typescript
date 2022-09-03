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
    cursor: pointer;

    /* #f5f5f5 */
`;
type Option = {
    [key: string]: string;
};
interface SelectProps {
    options?: Option[];
    selected?: boolean;
    left?: string;
    width?: string;
    optionColor?: string;
    optionSelectedColor?: string;
    optionBackGroundColor?: string;
}

const Title = styled.h3<SelectProps>`
    background: ${props => (props.selected ? props.optionSelectedColor : props.optionColor)};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 0.9rem;
    
`;
const ItemBackGround = styled.div<SelectProps>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    /* width: 100%; */
    z-index: -1;
    background: ${props => (props.optionBackGroundColor ? props.optionBackGroundColor : props.theme.darkBlue)};
    border-radius: 30px;
    transition: all 0.3s linear;
    width: ${(props: SelectProps) => props.width};
    left: ${(props: SelectProps) => props.left};
`;

export const LoadingOptionBar = ({ options, optionColor, optionSelectedColor, optionBackGroundColor }) => {
    return (
        <Wrapper>
            {options.map((option, index) => (
                <List key={option.name}>
                    <Title
                        optionColor={optionColor}
                        optionSelectedColor={optionSelectedColor}
                        selected={index === 0 ? true : false}
                    >
                        {option.name}
                    </Title>
                </List>
            ))}
            {/* <ItemBackGround optionBackGroundColor={optionBackGroundColor}/> */}
        </Wrapper>
    );
};

const OptionBar = ({ options, onClick, optionColor, optionSelectedColor, optionBackGroundColor }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [childLeft, setChildLeft] = useState<object>({});
    const [childWidth, setChildWidth] = useState<object>({});
    const optionRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const handleSelected = (index: number, category: string, main: string) => {
        if (selectedIndex === index) return;
        setSelectedIndex(index);
        onClick(category, main);
    };

    useLayoutEffect(() => {
        const { current } = optionRef;
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
        <Wrapper ref={optionRef}>
            {options.map((option: Option, index: number) => (
                <List key={option.name} onClick={() => handleSelected(index, option.category, option.main)}>
                    <Title
                        optionColor={optionColor}
                        optionSelectedColor={optionSelectedColor}
                        selected={selectedIndex === index ? true : false}
                    >
                        {option.name}
                    </Title>
                </List>
            ))}
            {childWidth && (
                <ItemBackGround
                    optionBackGroundColor={optionBackGroundColor}
                    width={`${childWidth[selectedIndex] + 2}px`}
                    left={`${childLeft[selectedIndex]}px`}
                />
            )}
        </Wrapper>
    );
};

export default OptionBar;
