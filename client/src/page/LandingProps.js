export const movieProps = {
    info: {
        url: '',
        page: 1,
        language: 'ko',
        main: 'movie',
        category: 'popular',
    },
    headerProps: {
        options: [
            { name: '인기', category: 'popular', main: 'movie' },
            { name: '최고 평점', category: 'top_rated', main: 'moive' },
            { name: '현재 개봉중', category: 'now_playing', main: 'movie' },
        ],
        text: '영화',
    },
};

export const tvProps = {
    info: {
        url: '',
        page: 1,
        language: 'ko',
        main: 'tv',
        category: 'popular',
    },
    headerProps: {
        options: [
            { name: '인기', category: 'popular', main: 'tv' },
            { name: '현재 상영중', category: 'on_the_air', main: 'tv' },
            { name: '최고평점', category: 'top_rated', main: 'tv' },
        ],
        text: 'TV',
    },
};

export const upcommingProps = {
    info: {
        url: '',
        page: 1,
        language: 'ko',
        main: 'movie',
        category: 'upcoming',
    },
    headerProps: {
        options: [
            { name: '영화', category: 'upcoming', main: 'movie' },
            { name: 'TV', category: 'airing_today', main: 'tv' },
        ],
        text: '예정',
    },
};
