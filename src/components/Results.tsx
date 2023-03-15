import { forwardRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import getData from "../data/api/getData";
import { airingStatusQueries, formatQueries, seasonsQueries } from '../data/data'
import { emojiColor, getKeyByValue, toHoursAndMinutes } from '../data/utils'

import { FaRegSmile, FaRegMeh, FaRegFrown } from "react-icons/fa"; 
/*
  percentage > 75% -> FaRegSmile
  60% < percentage < 75% -> FaRegMeh 
  percentage < 60% -> FaRegFrown 
*/


function getEmojiByPercentage(percentage: number): JSX.Element | undefined {
  if (percentage >= 75) {
    return <FaRegSmile color={emojiColor(percentage)} className="icon svg-inline--fa fa-w-16" />;
  } else if (percentage < 75 && percentage > 60) {
    return <FaRegMeh color={emojiColor(percentage)} className="icon svg-inline--fa fa-w-16" />;
  } else if (percentage < 50) {
    return <FaRegFrown color={emojiColor(percentage)} className="icon svg-inline--fa fa-w-16" />;
  } else {
    return undefined;
  }
}

type Data = {
  title: {
    romaji: string | null;
    english: string | null;
    native: string | null;
  };
  coverImage: {
    extraLarge?: string;
    large?: string;
    medium?: string;
    color?: string;
  };
  description: string;
  status: string;
  averageScore: number | null;
  genres: Array<string> | null;
  popularity: number | null;
  duration: number | null;
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

function Results({query, isLanding, layoutSelect, hasRank}: {query: any, layoutSelect: number, isLanding?: boolean,hasRank?: boolean}) {
  const [data, setData] = useState<Data[]>();
  const [amountToShow, setAmountToShow] = useState(20);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  // New Data
  useEffect(() => {
    setData(undefined);
    setAmountToShow(20);
    setPage(1);
    // Check if is queryFilter - variables = {}
    if (Object.keys(query.variables).length) {
      if (timer) clearTimeout(timer);
      setTimer(setTimeout(() => {
        getData(
          query.query, 
          {
            ...query.variables,
            perPage: (isLanding ? hasRank ? 10: 6 : 50),
            sort: query.variables.sort ? query.variables.sort : ['POPULARITY_DESC']
          }
        ).then((response) => {
          const newData = response.data.Page.media;
          setData(newData);
          setHasNextPage(response.data.Page.pageInfo.hasNextPage);
        });
      }, 1000));
    }
  }, [query]);

  // Add data to existed
  useEffect(() => {
    if (page != 1) {
      getData(
        query.query, 
        {
          ...query.variables,
          page: page, 
          perPage: (isLanding ? hasRank ? 10: 6 : 50)
        }
      ).then((response) => {
        const newData = response.data.Page.media;
        setData(prevData => {
          if (prevData) {
            return prevData.concat(newData);
          }
          return prevData;
        });
        setHasNextPage(response.data.Page.pageInfo.hasNextPage);
      });
    }
  }, [page]);

  useEffect(() => {
    if(!((amountToShow + 10) % 50) && hasNextPage) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [amountToShow])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting && !isLoading) {
          // Set timeout to show new cards
          if (ref.current) {
            observer.unobserve(ref.current);
          }
          setIsLoading(true);
          const timeoutId = setTimeout(() => {
            setIsLoading(false);
            setAmountToShow(prevAmount => prevAmount + 10);
            clearTimeout(timeoutId);
          }, 1000);

        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }
    );
    if (ref.current && !(hasRank && amountToShow === 100)) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  }, [data, amountToShow, ref, layoutSelect]);

  switch(layoutSelect) {
    case 0:
      return (
        <div className="results">
          {data ?
          data.slice(0, amountToShow).concat(Array(isLoading ? 10 : 0).fill(undefined)).map((media, index): JSX.Element => {

            // Media with data
            if (media) {
              if (amountToShow === index + 1 && !isLanding) {
                return (
                  <MediaCard ref={ref} orientation={!((index + 1) % 6) ? 'left' : 'right'} key={media.title.romaji} media={media}/>
                )
              }
              return (
                <MediaCard orientation={!((index + 1) % 6) ? 'left' : 'right'} key={media.title.romaji} media={media}/>
              )
            }

            // Loading new cards
            return (
              <MediaCard key={`media-${index}`} orientation={'left'} media={media} />
            );

          }) : 
          // First loading card
          Array(amountToShow).fill(undefined).slice(0, (isLanding ? 6 : undefined)).map((media, index) => {
            return (
              <MediaCard key={`media-${index}`} orientation={'left'} media={media} />
            );
          })
          }
        </div>
      );
    case 1:
      return (
        <div className="results chart">
          {data ?
          data.slice(0,amountToShow).concat(Array(isLoading ? 10 : 0).fill(undefined)).map((media, index):JSX.Element => {
          // Media with data
          if (media) {
            if (amountToShow === index + 1) {
              return (
                <MediaCardChart ref={ref} key={`media-${media.title.romaji}`} media={media}/>
              )
            }

            return (
              <MediaCardChart key={`media-${media.title.romaji}`} media={media}/>
            );
          }

          // Loading new cards
          return (
            <MediaCardChart key={`media-${index}`} media={media}/>
          );
          }) : 
          // First Loading card
          Array(amountToShow).fill(undefined).map((media, index) => {
            return (
              <MediaCardChart key={`media-${index}`} media={media}/>
            );
          })
          }
        </div>
      );
    case 2:
      return (
        <div className="results tableLayout">
          {data ?
          data.slice(0,amountToShow).concat(Array(isLoading ? 10 : 0).fill(undefined)).map((media, index):JSX.Element => {
            // Media with data
            if (media) {
              if (amountToShow === index + 1) {
                if (hasRank) {
                  return <MediaCardTable ref={ref} key={`media-${media.title.romaji}`} rank={index + 1} media={media}/>
                }
                return <MediaCardTable ref={ref} key={`media-${media.title.romaji}`} media={media}/>

              }

              if (hasRank) {
                return <MediaCardTable key={`media-${media.title.romaji}`} rank={index + 1} media={media}/>
              }

              return <MediaCardTable key={`media-${media.title.romaji}`} media={media}/>
            }

            // Loading new cards
            if (hasRank) {
              return <MediaCardTable key={`media-${index}`} rank={index + 1} media={media}/>
            }
            return <MediaCardTable key={`media-${index}`} media={media}/>
          }) : 
          // First Loading card
          Array(amountToShow).fill(undefined).map((media, index) => {
            if (hasRank) {
              return <MediaCardTable key={`media-${index}`} rank={index + 1} media={media}/>
            }
            return <MediaCardTable key={`media-${index}`} media={media}/>
          })
          }
        </div>
      );
    default:
      return (
        <div>Error</div>
      );
  }
}

const MediaCardChart = forwardRef(({media}: {media: Data | undefined}, ref: any) => {
  const [isHover, setIsHover] = useState(false);
  const childRef = useRef<HTMLDivElement>(null);

  return (
    <div className="media-card" ref={ref ?? childRef}>
      <div className="cover">
        <Link className="image-link" to={'#'}>
          {media && media.coverImage ?
            <img className="image loaded" src={media.coverImage.extraLarge} />
          : null
          }
        </Link>
        {media? 
        <div className="overlay">
          {media && media.title ?
            <Link className="title" to={'#'}>{media.title.romaji}</Link> : null
          }
          {media && media.studios ?
            <div className="studio" style={{color: `${media.coverImage.color ? media.coverImage.color : 'black'}`}}>
            <Link to={'#'}>{media.studios && media.studios.nodes.length ? media.studios.nodes[0].name : null}</Link>
            </div> : null
          }
        </div>
        : null
        }
      </div>
      <div className="data">
        <div className="body" onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <div className={`scroll-wrap ${isHover ? 'ps-container active ps ps--active-y': ''}`}>
            <div className={`header ${media ? '' : 'nodata'}`}>
              <div>
                {media && media.nextAiringEpisode
                ?
                <div className="date airing">
                  <div className="episode">
                    {media && media.nextAiringEpisode.episode} airing in
                  </div>
                  <div className="countdown">
                    {`${Math.floor((media.nextAiringEpisode.timeUntilAiring)/86400)} days, ${Math.floor(((media.nextAiringEpisode.timeUntilAiring) % 86400) / 3600)} hours`} 
                  </div>
                </div>
                :
                <div className="date">
                  {media ? media.season ? `${getKeyByValue(seasonsQueries,media.season)} ${media.seasonYear}` : "TBA" : null}
                </div> }
                <div className="typings">
                  { media ?
                  <span>{getKeyByValue(formatQueries, media.format)}</span>
                  : null }
                  { media && media.episodes ?
                  media.episodes === 1 
                  ?
                  media.duration ? 
                  <>
                    <span> • </span>
                    <span>{toHoursAndMinutes(media.duration)}</span>
                  </> 
                  : null
                  :
                  <>
                    <span> • </span>
                    <span>{media.episodes ? `${media.episodes} episodes` : null}</span>
                  </>
                  : null}
                </div>
              </div>
              <div>
                <div className="score">
                  {media && media.averageScore ?  
                  <>
                  {getEmojiByPercentage(media.averageScore)}
                  <span className="percentage">
                    {media.averageScore}%
                  </span>
                  </>
                  : null }
                </div>
              </div>
            </div>
            <div className={`description ${media ? '' : 'nodata'}`}>
              {media && media.description ? (new DOMParser).parseFromString(media.description, 'text/html').body.textContent : null }
            </div>
          </div>
        </div>
        <div className="footerCard">
          <div className="genres">
            {media && media.genres ? 
              media.genres.slice(0,3).map((genre) => {
                return <div className="genre border border-black" style={{background: `${media.coverImage.color ? media.coverImage.color : 'white'}`}} key={`genre-${genre}`}>{genre}</div>
              }) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
});

const MediaCardTable = forwardRef(({media, rank}: {media: Data | undefined, rank?: number}, ref: any) => {
  const [hasRank, sethasRank] = useState((rank ? true : false));
  const [isHover, setIsHover] = useState(false);
  const childRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`media-card ${hasRank ? 'has-rank' : ''}`} ref={ref ?? childRef}>
      {hasRank ?
        <div className="rank circle">
          <span className="hash">#</span>
          {rank}
        </div>
      : null}
      <Link className="cover" to={'#'}>
        {media ? 
          <img className="" src={media.coverImage.large}/>
        : null}
      </Link>
      <div className="content">
        <div className={`row title ${media ? '' : 'nodata'}`}>
          {media ? 
            <Link style={{color: `${isHover ? media.coverImage.color : 'black'}`}} to={'#'} onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
              <div className="title-wrap">{media.title.romaji}</div>

            </Link>
            : null
          }
          {media && media.genres ?
            <div className="genres">
              {media.genres.map((genre) => {
                return <div className='genre' style={{background: `${media.coverImage.color}`}} key={`hovercard-${genre}`}>{genre}</div>
              })}
            </div>
            : null
          }
        </div>
        <div className={`row score ${media ? '' : 'nodata'}`}>
            {media && media.averageScore ? 
              <>
                {getEmojiByPercentage(media.averageScore)}
                <div className="percentage">
                  {`${media.averageScore}%`}
                  <div className="sub-row popularity">
                    {media.popularity} users
                  </div>
                </div>
              </>
              : null
            }
        </div>
        {media && media.format ? 
          <div className="row format">
            {getKeyByValue(formatQueries, media.format)}
            {media.episodes === 1 ? 
              <div className="sub-row length">{media.duration ? toHoursAndMinutes(media.duration) : null}</div> :
              <div className="sub-row">{media.episodes} episodes</div>
            }
          </div>
          : null
        }
        <div className="row date">
          {media && media.nextAiringEpisode ? 
            <>
              {`${media.seasonYear !== new Date().getFullYear() ? `Airing Since ${media.seasonYear}` : 'Airing'}`}
              <div className="sub-row status">
                {`EP ${media.nextAiringEpisode.episode} airing in ${Math.floor((media.nextAiringEpisode.timeUntilAiring)/86400)} days`} 
              </div>
            </>
          :
            <>
              {media ?
                <>
                  {media.season ? `${getKeyByValue(seasonsQueries,media.season)} ${media.seasonYear}` : "TBA"}
                  <div className="sub-row status">{getKeyByValue(airingStatusQueries, media.status)}</div>
                </> 
                : null
              }
            </>
          }
        </div>
      </div>
    </div>
  );
});

const MediaCard = forwardRef((props: {media: Data, orientation: string}, ref: any) => {
  const {media, orientation} = props
  const [showInfo, setShowInfo] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const childRef = useRef<HTMLDivElement>(null);

  return (
    <div className="media-card" ref={ref ?? childRef} onMouseOver={() => {
        setShowInfo(true);
        setIsHover(true);
      }} onMouseLeave={() => {
        setShowInfo(false);
        setIsHover(false);
        }}>
      <Link className="cover" to={'#'}>
        {media ?
          <img className="image loaded" src={media.coverImage.large ? media.coverImage.large : ''} />
        : null}
      </Link>
      <Link to={'#'} className='title' style={{color: `${isHover && media ? media.coverImage.color : 'black'}`}}>
        {media ? 
        media.title.romaji: <div className="name-loading"></div>}
      </Link>
      {showInfo && media ? <HoverCard orientation={orientation} media={media} /> : null}
    </div>
  );
})

function HoverCard({media, orientation}: {media: Data, orientation: string}) {
  return (
    <div className={`hover-data ${orientation}`} style={{borderColor: `${media.coverImage.color}`}}>
      <div className='header'>
        <div className='date airing'>
          {media.nextAiringEpisode ?
            `EP ${media.nextAiringEpisode.episode} airing in ${Math.floor((media.nextAiringEpisode.timeUntilAiring)/86400)} days` : 
            `${media.season ? media.season : ''} ${media.seasonYear ? media.seasonYear : ''}`
          }
        </div>
        {media.averageScore ?
        <div className='score'>
          {getEmojiByPercentage(media.averageScore)}
          <span className="percentage">{`${media.averageScore}%`}</span> 
        </div>
        : null }
      </div>
      <div className='studios'>{media.studios && media.studios.nodes.length ? media.studios.nodes[0].name : null}</div>
      <div className='info'>
        <span>{media.format ? getKeyByValue(formatQueries, media.format) : null}</span>
        {media.episodes ? <><span> • </span><span>{media.episodes} episodes</span></>: null}
      </div>
      <div className='genres'>
        {media.genres ? media.genres.slice(0, 3).map((genre) => {
          return <div className='genre' style={{background: `${media.coverImage.color}`}} key={`hovercard-${genre}`}>{genre}</div>
        }) : null}
      </div>
    </div>
  )
}

export default Results
export type {Data}
