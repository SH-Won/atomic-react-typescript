import React from 'react'
import { Link as LinkItem } from 'react-router-dom'

const Link = ({to,name}) => {
  return (
     <LinkItem to={to}>{name}</LinkItem>
  )
}

export default Link