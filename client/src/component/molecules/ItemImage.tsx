import React from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL } from "../../../config";
interface imageProps {
  src: string;
}
const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;
const Figure = styled.figure`
  position: relative;
  padding-top: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
`;

const ItemImage = ({ src }: imageProps) => {
  return (
    <Figure>
      <Image src={IMAGE_BASE_URL + src} />
    </Figure>
  );
};

export default ItemImage;
