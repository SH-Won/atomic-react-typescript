import React, { useEffect } from 'react';


const LazyImage = (ImageComponent,src) => {

    const imageElement= useRef();
    const [loading,setLoading] = useState(true);
    const [url,setUrl] = useState('');

    useEffect(() =>{
        const observer = new IntersectionObserver(([entry],ob) => {
            if(entry.isIntersecting){
                setLoading(false);
                setUrl(src);
            }
            ob.unobserve(imageElement.current);
        })
         observer.observe(imageElement.current);
    },[])
    
  return (
    loading ? <ImageComponent ref={imageElement}/> : <ImageComponent src={url}/>
  )
}

export default LazyImage