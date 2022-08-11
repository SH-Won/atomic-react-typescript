import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/Title'
import OptionBar from '../molecules/OptionBar'

const Wrapper = styled.div`
display:flex;
width:70%;
align-items :center;
margin:.8rem 1rem;
`
const ContainerHeader = ({options,text,onClick}) => {
  return (
    <Wrapper>
          <Title text={text} size={'large'} />
          <OptionBar options={options}  onClick={onClick}/>
    </Wrapper>
  )
}

export default ContainerHeader