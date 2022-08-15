import React from 'react';
import styled, { css, keyframes } from 'styled-components';

interface CircleProps {
    strokeColor?: string;
    dashArray?: number;
    dashOffset?: number;
}
interface DotProps {
    deg: number;
}
const animateDot = deg => keyframes`
0%{
    transform :rotate(0deg);
}
100%{
    transform:rotate(${deg}deg);
}
`;
const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Bar = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Percent = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    background: transparent;
`;
const Svg = styled.svg`
    position: relative;
    display: flex;
    justify-content: center;
    width: 46px;
    height: 46px;
    transform: rotate(270deg);
`;
const Dot = styled.div<DotProps>`
    position: absolute;
    /* background : #f00; */
    inset: 2px;
    z-index: 10;
    /* transform : ${props => `rotate(${props.deg}deg)`}; */
    animation: ${props => animateDot(props.deg)} 0.5s 0.3s linear forwards;

    ::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 4px;
        background: #04fc43;
        top: -2px;
        left: 50%;
        border-radius: 50%;
        transform: translateX(-50%);
        box-shadow: 0 0 5px #04fc43, 0 0 15px #04fc43;
    }
`;
const Circle = styled.circle<CircleProps>`
    width: 100%;
    height: 100%;
    fill: black;
    stroke-width: 2.5;

    stroke: ${({ strokeColor }) => (strokeColor ? strokeColor : 'black')};
    transform: translate(3px, 3px);
    ${props => css`
        stroke-dasharray: ${props.dashArray};
        stroke-dashoffset: ${props.dashOffset};
    `}
`;
const PercentNumber = styled.span`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 16px;
    color: white;
`;
const getStrokeColor = percent => {
    if (percent >= 80) return '#04fc43';
    else if (percent >= 50) return '#fdb125';
    else return '#fc1e0e';
};
const CircleProgress = ({ percent }) => {
    const circleProps = {
        dashArray: 128,
        dashOffset: 128 - (128 * percent) / 100,
        strokeColor: getStrokeColor(percent),
    };
    const dotProps = {
        deg: 3.6 * percent,
    };
    return (
        <Container>
            <Bar>
                <Percent>
                    {/* <Dot {...dotProps}/> */}
                    <Svg>
                        <Circle cx="20" cy="20" r="20"></Circle>
                        <Circle {...circleProps} cx="20" cy="20" r="20"></Circle>
                    </Svg>
                    <PercentNumber>{percent}%</PercentNumber>
                </Percent>
            </Bar>
        </Container>
    );
};

export default CircleProgress;
