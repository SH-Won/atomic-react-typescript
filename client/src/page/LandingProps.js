export const movieProps = {
    info: {
      page: 1,
      language: "ko",
      main: "movie",
      category: "popular",
    },
    headerProps: {
      options: [
        { name: "인기", category: "popular" },
        { name: "최고 평점", category: "top_rated" },
        { name: "현재 개봉중", category: "now_playing" },
      ],
      text: "영화",
    },
  };

export const tvProps = {
    info: {
      page: 1,
      language: "ko",
      main: "tv",
      category: "popular",
    },
    headerProps: {
      options: [
        { name: "인기", category: "popular" },
        { name: "현재 상영중", category: "on_the_air" },
        { name: "최고평점", category: "top_rated" },
      ],
      text: "TV",
    },
  };