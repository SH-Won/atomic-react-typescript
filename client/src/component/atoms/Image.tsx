import React from 'react';
import styled from 'styled-components';
import { IMAGE_BASE_URL } from '../../../config';

interface Figure {
    aspectRatio?: number;
}
interface ImageProps extends Figure {
    src: string | null;
    alt?: string;
}
const Img = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
`;
const Figure = styled.figure<Figure>`
    position: relative;
    padding-top: ${({ aspectRatio }) => (aspectRatio ? `${aspectRatio * 100}%` : '100%')};
    width: 100%;
    margin: 0;
    overflow: hidden;
`;

const Image = ({ src, alt, aspectRatio }: ImageProps) => {
    return <Figure aspectRatio={aspectRatio}>{src && <Img src={src !== null ? IMAGE_BASE_URL + src : ''} />}</Figure>;
};
export default Image;
