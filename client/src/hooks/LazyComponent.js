import React, { useState, useEffect, useRef } from 'react';

const LazyComponent = ({ children }) => {
    const [LoadingComponent, RealComponent] = children;
    const [loading, setLoading] = useState(true);
    const [timer, setTimer] = useState(null);
    const componentRef = useRef();
    const observer = useRef();

    const showComponent = ([entry], ob) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                setLoading(false);
            }, 300);
            ob.unobserve(entry.target);
        }
    };

    useEffect(() => {
        observer.current = new IntersectionObserver(showComponent, { threshold: 0.5 });
        observer.current.observe(componentRef.current);
    }, []);

    if (loading) return <div ref={componentRef}>{LoadingComponent}</div>;

    return <>{RealComponent}</>;
};

export default LazyComponent;
