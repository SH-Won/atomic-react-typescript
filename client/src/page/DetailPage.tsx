import React from 'react'
import DetailItem from '../component/organisms/DetailItem';
import useFetch from '../hooks/useFetch';
interface matchProps{
    params?:object
}
const DetailPage = (props) =>{
    const id = props.match.params.id;
    const {posts:post,loading} = useFetch();

    if(loading) return <div>loading...</div>
     
    
  return (
    <DetailItem post={post}/>
  )
}

export default DetailPage