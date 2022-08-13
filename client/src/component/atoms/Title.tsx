import React from "react";
import styled from "styled-components";

interface titleProps {
  size: string;
  text: string;
  fontSize? : string;
  fontWeight? : string;
}
interface p {
  [key : string] : string;
}

const CommonTitle = styled.h2<p>`
  font-size: ${(props) => props.fontSize };
  font-weight : ${(props) => props.fontWeight};
`;
const SmallTitle = styled.h3<p>`
  font-size: ${(props) => props.fontSize};
  font-weight : ${(props) => props.fontWeight};
`;
const LargeTitle = styled.h1<p>`
  font-size: ${(props) => props.fontSize};
  font-weight : ${(props) => props.fontWeight};
`;
const matchTitleSize = (size: string, text: string, fontSize, fontWeight) => {
  const sizeProps = {
    fontSize,
    fontWeight
  }
  switch (size) {
    case "small":
      return <SmallTitle {...sizeProps}>{text}</SmallTitle>;
    case "large":
      return <LargeTitle {...sizeProps}>{text}</LargeTitle>;
    default:
      return <CommonTitle {...sizeProps}>{text}</CommonTitle>;
  }
};
const Title = ({ text, size ,fontSize,fontWeight}: titleProps) => {
  return <>{matchTitleSize(size, text,fontSize,fontWeight)}</>;
};

export default Title;
