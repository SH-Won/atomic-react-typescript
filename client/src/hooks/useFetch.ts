import { useState, useEffect } from 'react';

const useFetch = (url:string, filterCategory:boolean|string = false, lazy:boolean|null = null) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<object[]>([]);
    const [category, setCategory] = useState<boolean|string>(false);
    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await fetch(url);
            if (res.ok) {
                const json = await res.json();
                if (category === filterCategory) {
                    setPosts(prevPost => [...prevPost, ...json.results]);
                } else {
                    if (lazy) {
                        await new Promise((res, rej) => {
                            setTimeout(() => {
                                res('ok');
                            }, 400);
                        });
                    }
                    setPosts(json.results || json);
                }
                setCategory(filterCategory);
                setLoading(false);
            }
        } catch (e) {}
    };

    useEffect(() => {
        if (url === '') return;
        fetchData();
    }, [url]);

    return {
        loading,
        posts,
    };
};

export default useFetch;
