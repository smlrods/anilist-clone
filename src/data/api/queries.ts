const filterQuery = {
  query: `
    query($type: MediaType = ANIME, $perPage: Int, $page: Int, $search: String, $genres: [String], $tags: [String], $year: Int, $season: MediaSeason, $format: [MediaFormat], $status: MediaStatus, $streamingon: [Int], $countryOfOrigin: CountryCode, $source: MediaSource, $sort: [MediaSort]) {
      Page(perPage: $perPage, page: $page) {
      media(sort: $sort, type: $type, search: $search, genre_in: $genres, tag_in: $tags, seasonYear: $year, season: $season, format_in: $format, status: $status, licensedById_in: $streamingon, countryOfOrigin: $countryOfOrigin, source: $source) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        status
        description
        averageScore
        popularity
        duration
        genres
        episodes
        studios(isMain: true) {
          nodes {
            name
          }
        }
        format
        nextAiringEpisode {
          timeUntilAiring
          episode
        }
        season
        seasonYear
      }
    }
  }`,
  variables: {
    sort: ["POPULARITY_DESC"]
  }
} 

const trendingQuery = {
  query: `
    query($perPage: Int, $page: Int) {
      Page(perPage: $perPage, page: $page) {
      media(sort: TRENDING_DESC, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        averageScore
        genres
        description
        popularity
        status
        duration
        episodes
        studios(isMain: true) {
          nodes {
            name
          }
        }
        format
        nextAiringEpisode {
          timeUntilAiring
          episode
        }
        season
        seasonYear
      }
    }
  }`,
  variables: {
    perPage: 10,
    page: 1,
  }
}

const popularThisSeasonQuery = {
  query: `
    query ($perPage: Int, $page: Int, $season: MediaSeason!, $seasonYear: Int, $sort: [MediaSort]) {
      Page(perPage: $perPage, page: $page) {
        media(season: $season, seasonYear: $seasonYear,sort: $sort, type: ANIME) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          averageScore
          genres
          popularity
          description
          status
          episodes
          duration
          studios(isMain: true) {
            nodes {
              name
            }
          }
          format
          nextAiringEpisode {
            timeUntilAiring
            episode
          }
          season
          seasonYear
        }
      }
    }`,
  variables: {
    season: "WINTER",
    seasonYear: new Date().getFullYear(),
    sort: ["POPULARITY_DESC"],
    perPage: 10,
    page: 1
  }
};

const upcomingNexTSeasonListQuery = {
  query: `
    query ($perPage: Int, $page: Int, $season: MediaSeason!, $sort: [MediaSort], $year: Int) {
    Page(perPage: $perPage, page: $page) {
      media(season: $season, seasonYear: $year,sort: $sort, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        averageScore
        genres
        status
        description
        popularity
        episodes
        duration
        studios(isMain: true) {
          nodes {
            name
          }
        }
        format
        nextAiringEpisode {
          timeUntilAiring
          episode
        }
        season
        seasonYear
      }
    }
  }`,
  variables: {
    season: 'SPRING', // replace with the next season
    sort: ['POPULARITY_DESC'],
    year: new Date().getFullYear(),
    perPage: 10,
    page: 1
  }
};

const allTimePopularQuery = {
  query: `
    query ($sort: [MediaSort], $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(sort: $sort, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        averageScore
        studios(isMain: true) {
          nodes {
            name
          }
        }
        format
        genres
        popularity
        description
        duration
        episodes
        status
        nextAiringEpisode {
          timeUntilAiring
          episode
        }
        season
        seasonYear
      }
    }
  }`,
  variables: {
    sort: ["POPULARITY_DESC"]
  }
}

const top100Query = {
  query: `
    query ($perPage: Int, $page: Int, $sort: [MediaSort]) {
    Page(perPage: $perPage, page: $page) {
      media(sort: $sort, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
        averageScore
        genres
        popularity
        description
        status
        duration
        episodes
        studios(isMain: true) {
          nodes {
            name
          }
        }
        format
        nextAiringEpisode {
          timeUntilAiring
          episode
        }
        season
        seasonYear
      }
    }
  }`,
  variables: {
    perPage: 100,
    sort: ['SCORE_DESC'],
  }
}

export { filterQuery, trendingQuery, popularThisSeasonQuery, upcomingNexTSeasonListQuery, allTimePopularQuery, top100Query};
