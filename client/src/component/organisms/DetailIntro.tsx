import React from 'react'
import SplitScreen from '../../layout/SplitScreen'
import ItemImage from '../molecules/ItemImage'


const DetailIntro = ({post}) => {
    console.log(post);
  return (
    <SplitScreen leftWeight={1} rightWeight={2}>
      <ItemImage src={post.poster_path}/>
      <div></div>
    </SplitScreen>
  )
}

export default DetailIntro