export const MOVIE = {
    info: {
        url: '',
        page: null,
        language: 'ko',
        main: 'movie',
        category: 'popular',
    },
    containerProps: {
        header: {
            options: [
                { name: '인기', category: 'popular', main: 'movie' },
                { name: '최고 평점', category: 'top_rated', main: 'movie' },
                { name: '현재 개봉중', category: 'now_playing', main: 'movie' },
            ],
            text: '영화',
            textColor: '',
            optionColor: 'black',
            optionSelectedColor: 'linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)',
            optionBackGroundColor: '',
        },
        backgroundColor: '',
    },
};
//
export const TV = {
    info: {
        url: '',
        page: 1,
        language: 'ko',
        main: 'tv',
        category: 'popular',
    },
    containerProps: {
        header: {
            options: [
                { name: '인기', category: 'popular', main: 'tv' },
                { name: '현재 상영중', category: 'on_the_air', main: 'tv' },
                { name: '최고평점', category: 'top_rated', main: 'tv' },
            ],
            text: 'TV',
            textColor: '',
            optionColor: 'black',
            optionSelectedColor: 'linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)',
            optionBackGroundColor: '',
        },
    },
    backgroundColor: '',
};

export const UPCOMING = {
    info: {
        url: '',
        page: 1,
        language: 'ko',
        main: 'movie',
        category: 'upcoming',
    },
    containerProps: {
        header: {
            options: [
                { name: '영화', category: 'upcoming', main: 'movie' },
                { name: 'TV', category: 'airing_today', main: 'tv' },
            ],
            text: '예정',
            textColor: 'white',
            optionColor: 'black',
            optionSelectedColor: 'white',
            optionBackGroundColor: 'linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)',
        },
        backgroundColor: 'rgba(3,37,65,0.3)',
    },
};
// trending/{media_type}/{time_window}
// `${MOVIE_URL}${main}/${category}?api_key=${API_KEY}&language=${language}&page=${page}`;
export const TRENDING = {
    info: {
        url: '',
        page: 1,
        language: 'ko',
        main: 'trending',
        category: 'movie/week',
    },
    containerProps: {
        header: {
            options: [
                { name: '영화', category: 'movie/week', main: 'trending' },
                { name: 'TV', category: 'tv/week', main: 'trending' },
            ],
            text: '트렌딩',
            textColor: '',
            optionColor: 'black',
            optionSelectedColor: 'linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)',
            optionBackGroundColor: '',
        },
        backgroundColor: '',
    },
};
