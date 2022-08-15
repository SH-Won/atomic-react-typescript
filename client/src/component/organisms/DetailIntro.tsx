import React from 'react'
import SplitScreen from '../../layout/SplitScreen'
import DetailInfo from '../molecules/DetailInfo';
import ItemImage from '../molecules/ItemImage'


const DetailIntro = ({post}) => {
  return (
    <>
    <SplitScreen leftWeight={1} rightWeight={2}>
      <ItemImage src={post.poster_path}/>
      <DetailInfo post={post}/>
    </SplitScreen>
    </>
  )
}

export default DetailIntro