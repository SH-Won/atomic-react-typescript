import React ,{ useState,useEffect, useRef} from 'react'

const LazyComponent = ({children}) => {
  const [LoadingComponent,RealComponent] = children;
  const [loading,setLoading]= useState(true);
  const componentRef = useRef();
  const observer = useRef();

  const showComponent = ([entry],ob) => {
      console.log(entry);
      if(entry.isIntersecting){
          setLoading(false);
          ob.unobserve(entry.target);
      }
  }

  useEffect(()=>{
      observer.current = new IntersectionObserver(showComponent,{threshold:0.3});
      observer.current.observe(componentRef.current);
  },[])
 

 if(loading) return <div ref={componentRef}>{LoadingComponent}</div>
 
 return <>{RealComponent}</>
}

export default LazyComponent