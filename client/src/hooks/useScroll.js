import React, { useRef, useCallback } from 'react';

const useScroll = (loading, loadMore = null) => {
    const observer = useRef();

    const handleScroll = ([entry], ob) => {
        if (entry.isIntersecting) {
            if (loadMore !== null) {
                loadMore();
            }
            ob.unobserve(entry.target);
        }
    };
    const lastIndexRef = useCallback(
        node => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver(handleScroll, {
                threshold: 0.8,
            });
            if (node) observer.current.observe(node);
        },
        [loading],
    );
    return {
        lastIndexRef,
    };
};

export default useScroll;
