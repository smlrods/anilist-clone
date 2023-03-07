const trending = {
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
          medium
        }
        averageScore
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
    perPage: 10,
    page: 1,
  }
}

const popularThisSeason = {
  query: `
    query: query ($season: MediaSeason!, $sort: [MediaSort]) {
    Page {
      media(season: $season, sort: $sort, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          medium
        }
        averageScore
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
  varibles: {
    season: 'WINTER',
    sort: ['POPULARITY_DESC']
  }
}

const upcomingNexTSeasonList = {
  query: `
    query ($season: MediaSeason!, $sort: [MediaSort]) {
    Page {
      media(season: $season, sort: $sort, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          medium
        }
        averageScore
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
  }
};

const allTimePopular = {
  query: `
    query ($sort: [MediaSort]) {
    Page {
      media(sort: $sort, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          medium
        }
        averageScore
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
  varibles: {
    sort: ['POPULARITY_DESC']
  }
}

const top100 = {
  query: `
    query ($perPage: Int, $sort: [MediaSort]) {
    Page(perPage: $perPage) {
      media(sort: $sort, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        coverImage {
          medium
        }
        averageScore
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
  varibles: {
    perPage: 100,
    sort: ['SCORE_DESC'],
  }
}

export { trending, popularThisSeason, upcomingNexTSeasonList, allTimePopular, top100};
