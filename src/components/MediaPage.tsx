import { useEffect, useState } from "react";
import { FaAngleDown, FaHeart, FaLink } from "react-icons/fa";
import { Link, Route, Routes, useParams } from "react-router-dom";
import getData from "../data/api/getData";
import { formatQueries } from "../data/data";
import { minutesToHours, secondsToDays, secondsToHours, secondsToMinutes, getAbbreviatedMonth, getKeyByValue } from "../data/utils";
import './styles/MediaPage.css';

function MediaPage({query}: {query: any}) {
  const {id, title} = useParams();
  const [media, setMedia] = useState<any>();

  useEffect(() => {
    getData(
      query.query, 
      {
        ...query.variables,
        id: id
      }
    ).then((response) => {
      const newData = response.data.Media;
      setMedia(newData);
    });
  }, []);

  return (
    <div className="media media-page-unscoped media-anime">
      <div className="header-wrap">
        {media && media.bannerImage ?
          <div className="banner" style={{backgroundImage: media ? `url(${media.bannerImage})` : ''}}>
            <div className="shadow"></div>
          </div>
        : null}
        <div className="header">
          <div className="container">
            <div className={`cover-wrap ${media && media.bannerImage ? 'overlap-banner' : ''}`}>
              <div className="cover-wrap-inner">
                <img className="cover" src={media ? media.coverImage.large : ''} />
                <div className="actions">
                  <div className="list">
                    <div className="add">Add to List</div>
                    <div className="dropdown el-dropdown">
                      <span className="el-dropdown-link el-dropdown-selfdefine">
                        <FaAngleDown />
                      </span>
                    </div>
                  </div>
                  <div className="favourite">
                    <FaHeart className="svg-inline--fa fa-w-16" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <h1>{media ? media.title.romaji : null}</h1>
              <p className="description" style={{whiteSpace: 'pre-line'}}>
                {media && media.description ? (new DOMParser).parseFromString(media.description, 'text/html').body.textContent : null}
              </p>
              <div className="nav">
                <Link to={``} className='link'>Overview</Link>
                <Link to={`characters`} className='link'>Characters</Link>
                <Link to={`staff`} className='link'>Staff</Link>
                <Link to={`stats`} className='link'>Stats</Link>
                <Link to={`social`} className='link'>Social</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content container">
        <Sidebar media={media}/>
        <Routes>
          <Route path={``} element={<Overview media={media} />}/>
          <Route path={`characters`} element={<Characters />}/>
          <Route path={`staff`} element={<Staff />}/>
          <Route path={`stats`} element={<Stats />}/>
          <Route path={`social`} element={<Social />}/>
        </Routes>
      </div>
    </div>
  );
}

function Sidebar({media}: {media: any}) {
  return (
    <div className="sidebar">
      <div className="rankings"></div>
      <div className="data">
        {media && media.nextAiringEpisode ? 
          <div className="data-set airing-countdown">
            <div className="type">Airing</div>
            <div className="countdown el-tooltip value">
              <span>
                {`Ep ${media.nextAiringEpisode.episode}: `}
                {
                  secondsToDays(media.nextAiringEpisode.timeUntilAiring) ? 
                  <span>{secondsToDays(media.nextAiringEpisode.timeUntilAiring)}d </span> :
                  null
                }
                {
                  secondsToHours(media.nextAiringEpisode.timeUntilAiring % 86400) ?
                  <span>{secondsToHours(media.nextAiringEpisode.timeUntilAiring % 86400)}h </span> :
                  null
                }
                {
                  secondsToMinutes((media.nextAiringEpisode.timeUntilAiring % 86400) % 3600) ?
                  <span>{secondsToMinutes((media.nextAiringEpisode.timeUntilAiring % 86400) % 3600)}m</span> :
                  null
                }
              </span>
            </div>
          </div>
        : null}
        {media && media.format ? 
          <DataSet type="Format" value={media.format} />
        : null}
        {media && media.episodes ? 
          <DataSet type="Episodes" value={media.episodes} />
        : null}
        {media && media.duration ? 
          <DataSet 
            type="Duration"
            value={`${minutesToHours(media.duration) ? `${minutesToHours(media.duration)} hour${minutesToHours(media.duration) > 1 ? 's' : ''}` : ''} ${media.duration % 60} mins`}
          />
        : null}
        {media && media.status ? 
          <DataSet 
            type="Status"
            value={media.status.toLowerCase().replace(/_/g, ' ')}
          />
        : null}
        {media && media.startDate && media.startDate.year ? 
          <DataSet
            type="Start Date"
            value={`${getAbbreviatedMonth(media.startDate.month)} ${media.startDate.day}, ${media.startDate.year}`}
          />
        : null}
        {media && media.endDate && media.endDate.year ? 
          <DataSet
            type="End Date"
            value={`${getAbbreviatedMonth(media.endDate.month)} ${media.endDate.day}, ${media.endDate.year}`}
          />
        : null}
        {media && media.season ? 
          <DataSet
            type="Season"
            value={`${media.season.toLowerCase()} ${media.seasonYear}`}
          />
        : null}
        {media && media.averageScore ? 
          <DataSet
            type="Average Score"
            value={`${media.averageScore}%`}
          />
        : null}
        {media && media.meanScore ? 
          <DataSet
            type="Mean Score"
            value={`${media.meanScore}%`}
          />
        : null}
        {media && media.popularity? 
          <DataSet
            type="Popularity"
            value={`${media.popularity}`}
          />
        : null}
        {media && media.favourites ? 
          <DataSet
            type="Favorites"
            value={`${media.favourites}`}
          />
        : null}
        {media && media.studios && media.studios.length ? 
          <DataSet
            type="Studio"
            value={media.studios.edges.find((studio: any) => studio.isMain).node.name}
          />
        : null}
        {media && media.studios ? 
          <DataSet
            type="Producers"
            value={media.studios.edges.filter((studio: any) => !studio.isMain).map((studio: any) => {
              return (
              <span key={`${studio.node.name}`}>
                <Link to={''}>
                  {studio.node.name}
                  <br />
                </Link>
              </span>);
            })}
          />
        : null}
        {media && media.source ? 
          <DataSet
            type="Source"
            value={`${media.source.toLowerCase().replace(/_/g, ' ')}`}
          />
        : null}
        {media && media.hashtag ? 
          <DataSet
            type="Hashtag"
            value={`${media.hashtag}`}
          />
        : null}
        {media && media.genres ? 
          <DataSet
            type="Genres"
            value={media.genres.map((genre: any) => {
              return (
                <span key={`${genre}`}>
                  <Link to={''}>{genre}</Link>
                  <br />
                </span>
              );
            })}
          />
        : null}
        {media && media.title.romaji ? 
          <DataSet
            type="Romaji"
            value={media.title.romaji}
          />
        : null}
        {media && media.title.english ? 
          <DataSet
            type="English"
            value={media.title.english}
          />
        : null}
        {media && media.title.native ? 
          <DataSet
            type="Native"
            value={media.title.native}
          />
        : null}
        {media && media.synonyms ? 
          <DataSet
            type="Synonyms"
            value={media.synonyms.map((synonym: any) => {
              return (
                <span key={`${synonym}`}>
                  <Link to={''}>{synonym}</Link>
                  <br />
                </span>
              );
            })}
          />
        : null}
      </div>
      <div className="tags">
        <h2>Tags</h2>
        {media && media.tags && media.tags.length ? 
          media.tags.map((tag: any) => {
            return (
              <div className='tag' key={`${tag.name}`}>
                <Link className="el-tooltip name" to={''}>{tag.name}</Link>
                <div className="rank">{tag.rank}%</div>
              </div>
            );
          })
        : <div className="add">No tags yet, add one?</div>}
      </div>
      {media && media.externalLinks && media.externalLinks.length ?
      <div className="external-links">
        <h2>External & Streaming links</h2>
        <div className="external-links-wrap">
            {media.externalLinks.map((external: any) => {
              return (
                <a href={external.url} key={external.url} className={`external-link ${!external.color ? 'no-color' : ''}`} >
                  <div className="icon-wrap" style={{backgroundColor: external.color ? external.color : ''}}>
                    {
                      external.icon ? 
                      <img src={external.icon} />
                    : <FaLink className="icon default svg-inline--fa fa-w-16" />
                    }
                  </div>
                  <span className="name">
                    {external.site}
                    <span className="language">{external.language && external.language.match(/japanese/i) ? "JP" : ''}</span>
                  </span>
                </a>
              );
            })}
        </div>
      </div>
      : null}
    </div>
  );
}

function DataSet({value, type}: {value: any, type: string}) {
  return (
    <div className="data-set">
      <div className="type">{type}</div>
      <div className="value">{value}</div>
    </div>
  );
}

function Overview({media}: {media: any}) {
  return (
    <div className="overview">
      {media && media.relations ?
      <div className="relations">
        <h2>Relations</h2>
        <div className="grid-wrap">
          {media.relations.edges.map((relation: any, index: number) => {
            return (
              <div className="media-preview-card" key={`media-preview-card-${relation.node.title.romaji}-${index}`}>
                <Link to={''} className='' style={{backgroundImage: relation ? `url(${relation.node.coverImage.medium})` : ''}}></Link>
                <div className="content">
                  <div className="info-header">
                    <div>{relation.relationType.toLowerCase()}</div>
                  </div>
                  <Link to={''} className='title'>{relation.node.title.romaji}</Link>
                  <div className="info">{getKeyByValue(formatQueries, relation.node.format)}&nbsp;·&nbsp; {relation.node.status.toLowerCase()}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      : null}
      {media && media.characters ?
        <div className="characters">
          <h2 className="link">Characters</h2>
          <div className="grid-wrap">
            {media.characters.edges.map((character: any) => {
              return (
                <div key={character.node.name.userPreferred} className={`role-card view-character${character.voiceActors.length ? '-staff' : ''}`}>
                  <div className="character">
                    <Link to={''} className='cover' style={{backgroundImage: character && character.node.image ? `url(${character.node.image.large})` : ''}}></Link>
                    <Link to={''} className="content">
                      <div className="name">{character.node.name.userPreferred}</div>
                      <div className="role">{character.role.toLowerCase()}</div>
                    </Link>
                  </div>
                  {character.voiceActors.length ?
                    <div className="staff">
                      <Link to={''} className='cover' style={{backgroundImage: character && character.voiceActors[0].image ? `url(${character.voiceActors[0].image.large})` : ''}}></Link>
                      <Link to={''} className="content">
                        <div className="name">{character.voiceActors[0].name.userPreferred}</div>
                        <div className="role">{character.voiceActors[0].languageV2.toLowerCase()}</div>
                      </Link>
                    </div>
                  : null}
                </div>
              )
            })}
          </div>
        </div>
      : null}
      {media && media.staff ?
        <div className="staff">
          <h2 className="link">Staff</h2>
          <div className="grid-wrap">
            {media.staff.edges.map((staff: any) => {
              return (
                <div key={`role-card-${staff.node.name.userPreferred}`} className="role-card view-staff small">
                  <div className="staff">
                    <Link to={''} className='cover' style={{backgroundImage: staff.node.image ? `url(${staff.node.image.large})` : ''}}></Link>
                    <Link to={''} className='content'>
                      <div className="name">{staff.node.name.userPreferred}</div>
                      <div className="role">{staff.role}</div>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      : null}
      <div className="grid-section-wrap"></div>
      <div className="grid-section-wrap">
        {media && media.trailer ?
          <div className="trailer">
            <h2>Trailer</h2>
            <iframe src={`https://www.youtube.com/embed/${media.trailer.id}`} allowFullScreen={true} className="video"></iframe>
          </div>
        : null}
      </div>
      {media && media.recommendations.nodes.length ?
        <div className="recommendations">
          <h2>
            Recommendations
            <div className="view-all">
              <div className="toggle">View All Recommendations</div>
            </div>
          </h2>
          <div className="wrap">
            {media.recommendations.nodes.slice(0,4).map((recommendation: any) => {
              return (
                <div className="recommendation-card" key={recommendation.mediaRecommendation.title.romaji}>
                  <div className="cover" style={{backgroundImage: recommendation.mediaRecommendation.coverImage.medium ? `url(${recommendation.mediaRecommendation.coverImage.medium})` : ''}}></div>
                  <Link to={''}>
                    <div className="title">
                      <div>
                        <span style={{boxShadow: 'transparent 0px 0px'}}>
                          <span>{recommendation.mediaRecommendation.title.romaji}</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      : null}
    </div>
  )
}

function Characters() {
  return (
    <div className="characters">
      Characters
    </div>
  )
}

function Staff() {
  return (
    <div className="staff">
      Staff
    </div>
  )
}

function Stats() {
  return (
    <div className="stats">
      Stats
    </div>
  )
}

function Social() {
  return (
    <div className="social">
      Social
    </div>
  )
}

export default MediaPage;
