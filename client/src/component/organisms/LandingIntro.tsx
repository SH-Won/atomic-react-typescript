import React, { useState,useMemo } from "react";
import styled, { ThemeProviderProps } from "styled-components";
import { MOVIE_URL,IMAGE_BASE_URL } from "../../../config";
import Title from "../atoms/Title";
import SearchForm from './SearchForm';
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  /* height: calc(100vh / 2.5); */
  /* max-height: 360px; */
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  color: #fff;
  background-image: ${(props: WrapperProps) =>
    ` linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0.1) 100%), url(${props.url})`};
`;
const Content = styled.div`
  padding: 2rem 0 2rem 2rem;
`;
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
const LandingIntro = () => {
  const index = useMemo(() => Math.floor(Math.random() * 4),[]);
  const url = (IMAGE_BASE_URL + bg[index]).replace(/w500/g, "original");
  const [searchValue,setSearchValue] = useState('');
  const onChangeSearchValue = (e) =>{
      setSearchValue(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const query = searchValue.replace(/\s/g,'+');
    // history.pushState(query,null,`/search/${query}`);
    location.href =`/search/${query}`;
  }
  return (
    <Wrapper url={url}>
      <Content>
        <Title
          size={"large"}
          text={"환영 합니다"}
          fontSize={"3em"}
          fontWeight={"700"}
          margin={'0 0 1.5rem 0'}
        />
        <Title
          size={""}
          fontSize={"2em"}
          fontWeight={"600"}
          text={
            "수 백만개의 영화, TV 프로그램 그리고 배우들. 지금 바로 알아 보세요"
          }
          margin = {'0 0 1.5rem 0'}
        />
        <SearchForm searchValue={searchValue} onChange={onChangeSearchValue} onSubmit={onSubmit}/>
      </Content>
    </Wrapper>
  );
};
export default LandingIntro;
