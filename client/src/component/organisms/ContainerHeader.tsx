import React from 'react'
import styled from 'styled-components'
import Title from '../atoms/Title'
import OptionBar from '../molecules/OptionBar'

const Wrapper = styled.div`
display:flex;
width:70%;
margin:.8rem 1rem;
`
const ContainerHeader = ({options,text,selected,onClick}) => {
  return (
    <Wrapper>
          <Title text={text} size={'large'}/>
          <OptionBar options={options} selected={selected} onClick={onClick}/>
    </Wrapper>
  )
}

export default ContainerHeader