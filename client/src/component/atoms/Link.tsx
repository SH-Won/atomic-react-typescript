import React from 'react'

import styled from 'styled-components';


const Li = styled.li`
padding:0.5rem;
margin:0;
font-color:black;

`
const onChangeRoute = (e,href : string) => {
  e.preventDefault();
  location.href = href;
}
const Link = ({to,name}) => {
  return (
     <Li className='link' onClick={(e) => onChangeRoute(e,to)}>{name}</Li>
  )
}


export default Link