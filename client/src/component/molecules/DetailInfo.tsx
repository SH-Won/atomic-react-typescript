import React from 'react'
import styled from 'styled-components'
import CircleProgress from './CircleProgress';

const Container = styled.div`
display:flex;
flex-direction : column;
`


const DetailInfo = ({post}) => {
    const {title,genres,production_companies,overview,original_title,vote_average,tagline,status,runtime,release_date} = post;
  return (
    <Container>
        <h1>{original_title}</h1>
        <ul>
           {genres.map((genre,index) => <li key={genre.id + index}>{genre.name}</li>)}
        </ul>
        <div style ={{display:'flex',justifyContent :'flex-start'}}>
        <CircleProgress percent={Math.floor(vote_average * 10)}/>
        </div>
        <span>{tagline}</span>
        <h2>Overview</h2>
        <p>{overview}</p>

    </Container>
  )
}

export default DetailInfo