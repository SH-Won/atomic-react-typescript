import React, { useEffect,useRef,useState } from 'react';


const LazyImage = (ImageComponent) => {
    return (props) => {
      const imageElement= useRef();
      const [loading,setLoading] = useState(true);
      const [src,setSrc] = useState(null);
  
      useEffect(() =>{
          const observer = new IntersectionObserver(([entry],ob) => {
              if(entry.isIntersecting){
                  setLoading(false);
                  setSrc(props.src);
              }
              ob.unobserve(imageElement.current);
          })
           observer.observe(imageElement.current);

           return  () =>{

           }
      },[]);

      return <ImageComponent ref={imageElement} src={src}/> 
    }
}

export default LazyImage