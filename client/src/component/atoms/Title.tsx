import React from "react";
import styled from "styled-components";

interface titleProps {
  size: string;
  text: string;
}

const CommonTitle = styled.span`
  font-size: 1rem;
`;
const SmallTitle = styled(CommonTitle)`
  font-size: 0.7rem;
`;
const LargeTitle = styled(CommonTitle)`
  font-size: 1.3rem;
`;
const matchTitleSize = (size: string, text: string) => {
  switch (size) {
    case "small":
      return <SmallTitle>{text}</SmallTitle>;
    case "large":
      return <LargeTitle>{text}</LargeTitle>;
    default:
      return <CommonTitle>{text}</CommonTitle>;
  }
};
const Title = ({ text, size = "" }: titleProps) => {
  return <>{matchTitleSize(size, text)}</>;
};

export default Title;
