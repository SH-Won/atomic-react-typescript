import React, { useState } from 'react'
import styled from 'styled-components';


const Container = styled.div`
height:300px;
background-color: blue;
`

const LoginPage = () => {
  const [value,setValue] = useState('1');
  const handleClick = (e : React.MouseEvent<HTMLDivElement>) => {
     setValue('test');
  }
  return (
    <Container onClick={handleClick}>
      {value}
    </Container>
  )
}

export default LoginPage