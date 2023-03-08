import { useEffect, useState } from "react";
import getData from "../data/api/getData";
import { formatQueries } from '../data/data'
import { getKeyByValue } from '../data/utils'

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

function Results({query}: {query: any}) {
  const [data, setData] = useState<Data[]>();
  useEffect(() => {
    getData(query.query, {...query.variables, page: 1, perPage: 6}).then((data) => {
      setData(data.data.Page.media);
    });
  }, [query]);

  return (
    <div>
      {data ?
      data.map((media): JSX.Element => {
        return (
          <MediaCard key={media.title.romaji} media={media}/>
        )
      }) : <div>Loading</div>
      }
    </div>
  );
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
            `${media.season ? media.season : ''} ${media.seasonYear ? media.seasonYear : ''}`
          }
        </div>
        <div className='score'>{media.averageScore}%</div>
      </div>
      <div className='studios'>{media.studios && media.studios.nodes.length ? media.studios.nodes[0].name : null}</div>
      <div className='info'>
        <span>{media.format ? getKeyByValue(formatQueries, media.format) : null}</span>
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

export default Results
export type {Data}
