import { render, renderHook, waitFor } from "@testing-library/react"
import useFetch from '../hooks/useFetch';
import {makeURL} from '../hoc/withFetch';
import { act } from "react-dom/test-utils";

const info = {
    url: '',
    page: 1,
    language: 'ko',
    main: 'movie',
    category: 'popular',
};


describe('useFetch 가 비동기 요청을 처리하고 이를 정상적으로 응답한다.', () => {
    const url = makeURL(info);
    const {result} = renderHook(() => useFetch(url));
    
   


    

})