import React from 'react'
import styled from 'styled-components'

interface imageProps{
    src : string;
}
const Image = styled.img`
position:absolute;
top:0;
width:100%;
height:100%;
`;
const Figure = styled.figure`
position : relative;
padding-top : 75%;
width:100%;
margin:0;
`

const ItemImage = ({src} : imageProps) => {
  return (
      <Figure>
    <Image src={src} />
    </Figure>
  )
}

export default ItemImage