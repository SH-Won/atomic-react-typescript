import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.darkBlue};
  justify-content : flex-start;
  align-content : center;
  align-items :stretch;
  border-radius:30px;
  margin: 0 0 0 1rem;
`;
const List = styled.div`
  position: relative;
  border-radius: 30px;
  padding:.25rem 1rem;
`;
interface SelectProps{
  selected:boolean;
}
const Title = styled.h3`
  background: ${(props:SelectProps) => props.selected ? 'linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)' : 'black'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const ItemBackGround = styled.div`
  position: absolute;
  top: 0;
  left:0;
  height:100%;
  width:100%;
  z-index:-1;
  background-color: ${(props) => props.theme.darkBlue};
  border-radius:30px;
  visibility ${(props : SelectProps) => props.selected ? 'visible' : 'hidden'};
  

`;

const OptionBar = ({ options ,selected,onClick }) => {
  return (
    <Wrapper>
      {options.map((option, index) => (
        <List onClick={()=> onClick(index,option.category)}>
          <Title selected={selected === index ? true : false}>{option.name}</Title>
          <ItemBackGround selected={selected === index ? true :false}/>
        </List>
      ))}
    </Wrapper>
  );
};

export default OptionBar;
