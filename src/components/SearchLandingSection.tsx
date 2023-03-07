import React, {useState} from 'react'
import { formatQueries, formatsData } from '../data/data'

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
  format: string;
  nextAiringEpisode: {
    timeUntilAiring: number;
    episode: number;
  } | null;
  season: string;
  seasonYear: number;
}

function SearchLandingSection ({ title, data }: { title: string, data: Data[] }): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      {data.map((media): JSX.Element => {
        return (
          <MediaCard key={media.title.romaji} media={media}/>
        )
      })}
    </div>
  )
}

function MediaCard({media}: {media: Data}) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div onMouseOver={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
        <img src={media.coverImage.medium} />
        <p>{media.title.romaji}</p>
      </div>
      {showInfo ? <HoverCard media={media} /> : null}
    </div>
  );
}

function HoverCard({media}: {media: Data}) {
  return (
    <div>
      <div className='head'>
        <div className='date'>
          {media.nextAiringEpisode ?
            `EP ${media.nextAiringEpisode.episode} airing in ${Math.floor((media.nextAiringEpisode.timeUntilAiring)/86400)} days` : 
            `${media.season} ${media.seasonYear}`
          }
        </div>
        <div className='score'>{media.averageScore}%</div>
      </div>
      <div className='studios'>{media.studios ? media.studios.nodes[0].name : null}</div>
      <div className='info'>
        <span>{media.format ? formatQueries[media.format] : null}</span>
        {media.episodes ? <><span>-</span><span>{media.episodes}</span></>: null}
      </div>
      <div className='genres'>
        {media.genres ? media.genres.slice(0, 3).map((genre) => {
          return <div key={`hovercard-${genre}`}>{genre}</div>
        }) : null}
      </div>
    </div>
  )
}

export default SearchLandingSection
