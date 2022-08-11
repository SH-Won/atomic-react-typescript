import React,{useRef,useCallback} from 'react'

const useScroll = (loading,loadMore) => {
    const observer = useRef();
    
    const handleScroll = (([entry],ob) => {
        if(entry.isIntersecting){
            console.log('intersecting')
            loadMore();
            ob.unobserve(entry.target);
        }
    })
    const lastIndexRef = useCallback(node =>{
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(handleScroll,{threshold:0.8});
        if(node) observer.current.observe(node);
    },[loading])
    console.log('observe');
    return {
        lastIndexRef,
    }
}

export default useScroll