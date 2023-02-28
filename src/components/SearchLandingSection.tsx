import React from 'react'

type Data = {
  title: {
    romaji: string | null;
    english: string | null;
    native: string | null;
  };
  coverImage: {
    medium: string;
  };
  averageScore: number | null;
  genres: Array<string> | null;
  episodes: number | null;
  studios: {
    nodes: Array<{name: string}>;
  } | null;
  format: string | null;
  nextAiringEpisode: {
    timeUntilAiring: number;
    episode: number;
  } | null;
}

function SearchLandingSection ({ title, data }: { title: string, data: Data[] }): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      {data.map((anime): JSX.Element => {
        return (
          <a key={anime.title.romaji} href="#">
            <img src={anime.coverImage.medium} />
            <p>{anime.title.romaji}</p>
          </a>
        )
      })}
    </div>
  )
}

export default SearchLandingSection
