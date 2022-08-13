import React from "react";
import styled, { ThemeProviderProps } from "styled-components";
import { IMAGE_BASE_URL } from "../../../config";
import Title from '../atoms/Title';
const bg = [
  "/iSA7iVTzExSuXvjDEoFELwY5JgT.jpg",
  "/hLySjP3yy115dtSUTT3p7sn76oh.jpg",
  "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
  "/sIRK4NYe1OK2hOJAg4xxuxzceKk.jpg",
  "/fMvRiykSZrb5KCQnHxe3dNN5XKX.jpg",
];

interface WrapperProps {
  url: string;
}
const Wrapper = styled.section`
  display:flex;
  flex-direction : column;
  align-items : center;
  min-height: 300px;
  height: calc(100vh / 2.5);
  max-height: 360px;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  color: #fff;
  background-image: ${(props:WrapperProps) => ` linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0.1) 100%), url(${props.url})`};
`;

const LandingIntro = () => {
  const index = Math.floor(Math.random() * 4);
  const url = (IMAGE_BASE_URL + bg[index]).replace(/w500/g,'original');

  return <Wrapper url={url}>
      <Title size={'large'} text={'환영 합니다'} fontSize={'3em'} fontWeight={'700'} />
      <Title size={''} fontSize={'2em'} fontWeight={'600'} text={'수 백만개의 영화, TV 프로그램 그리고 배우들. 지금 바로 알아 보세요'}/>
  </Wrapper>
};
export default LandingIntro;
