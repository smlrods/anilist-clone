import Filters from './Filters'
import SearchLanding from './SearchLanding'
import React, { useEffect, useRef, useState } from 'react'
import { redirect, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Results from './Results';
import { airingStatusQueries, countryOrOriginQueries, formatQueries, genresData, seasonsQueries, sourceMaterialQueries, streamingOnQueries, sortQueries } from '../data/data';
import { getKeyByValue } from '../data/utils';
import { filterQuery } from '../data/api/queries';
import { FaSort, FaTags, FaTh, FaThLarge, FaThList } from 'react-icons/fa';
import { useOutsideAlerter } from './hooks/filterHooks';

function Search ({title, query, hasRank}: {title?: string, query: any, hasRank?: boolean}): JSX.Element {
  const [search, setSearch] = useState<string>();
  const [genres, setGenres] = useState<string[]>();
  const [tags, setTags] = useState<string[]>();
  const [year, setYear] = useState<number>();
  const [season, setSeason] = useState<string>();
  const [format, setFormat] = useState<string[]>();
  const [airingStatus, setAiringStatus] = useState<string>();
  const [streamingOn, setStreamingOn] = useState<string[]>();
  const [countryOfOrigin, setCountryOfOrigin] = useState<string>();
  const [sourceMaterial, setSourceMaterial] = useState<string>();
  const [sort, setSort] = useState<string>();

  const [genresAndTags, setGenresAndTags] = useState<string[]>();

  const [showResults, setShowResults] = useState(false);

  const [queryFilter, setQueryFilter] = useState<{[key: string]: any}>();

  const [layout, setLayout] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const sortGenresAndTags = () => {
    const genresSorted: string[] = [];
    const tagsSorted: string[] = [];

    if (genresAndTags) {
      genresAndTags.forEach((element) => {
        if (genresData.genres.includes(element)) {
          genresSorted.push(element);
        } else if (genresData.tags.includes(element)) {
          tagsSorted.push(element);
        }
      });
      setGenres(genresSorted.length ? genresSorted : undefined);
      setTags(tagsSorted.length ? tagsSorted : undefined);
    }
  }

  const convertToQuery = (filter: string[], queries: any) => {
    if (filter) {
      return filter.map((f: string) => {
        return queries[f];
      })
    } else {
      return filter;
    }
  }

  const updateQuery = () => {
    setQueryFilter(
      { 
        query: query.query, 
        variables: 
          {
            ...query.variables, 
            ...(search && {search: search}),
            ...(genres && {genres: genres}),
            ...(tags && {tags: tags}),
            ...(year && {year: year}),
            ...(season && {season: seasonsQueries[season]}),
            ...(format && {format: convertToQuery(format, formatQueries)}),
            ...(airingStatus && {status: airingStatusQueries[airingStatus]}),
            ...(streamingOn && {streamingon: convertToQuery(streamingOn, streamingOnQueries)}),
            ...(countryOfOrigin && {countryOfOrigin: countryOrOriginQueries[countryOfOrigin]}),
            ...(sourceMaterial && {source: sourceMaterialQueries[sourceMaterial]}),
            ...(sort && {sort: [sortQueries[sort]]})
          }
      }
    );
  }

  useEffect(() => {
    updateQuery();
    if (Object.keys(filterQuery.variables).length) {
      setQueryFilter(undefined);
    }
  }, []);

  useEffect(() => {
    sortGenresAndTags();
  }, [genresAndTags]);

  useEffect(() => {
    if (season) {
      if (!year) setYear(new Date().getFullYear());
    }
  }, [season]);

  useEffect(() => {
    if(!location.search) {
      setSearch(undefined);
      setGenres(undefined);
      setYear(undefined);
      setSeason(undefined);
      setFormat(undefined);
      setAiringStatus(undefined);
      setStreamingOn(undefined);
      setCountryOfOrigin(undefined);
      setSourceMaterial(undefined);
      setQueryFilter(undefined);
      setSort(undefined);
      setShowResults(false);
    } else {
      setShowResults(true);
      if (location.pathname != '/search/anime') navigate({pathname: '/search/anime', search: searchParams.toString()}); 
      updateQuery();
    }
  }, [location])

  return (
    <div className='search'>
      <div className='container'>
        {title ? 
          <h1 className='alias-title'>{title}</h1>
        : null}
        <Filters 
          setSearch={setSearch}
          setGenres={setGenresAndTags}
          setYear={setYear}
          setSeason={setSeason}
          setFormats={setFormat}
          setAiringStatus={setAiringStatus}
          setStreamingOn={setStreamingOn}
          setCountryOfOrigin={setCountryOfOrigin}
          setSourceMaterial={setSourceMaterial}
          setSort={setSort}
          search={search}
          genres={genresAndTags}
          year={year}
          season={season}
          formats={format}
          airingStatus={airingStatus}
          streamingOn={streamingOn}
          countryOfOrigin={countryOfOrigin}
          sourceMaterial={sourceMaterial}
          sort={sort}
          />
        <FiltersActive 
          setSearch={setSearch}
          setGenres={setGenresAndTags}
          setYear={setYear}
          setSeason={setSeason}
          setFormats={setFormat}
          setAiringStatus={setAiringStatus}
          setStreamingOn={setStreamingOn}
          setCountryOfOrigin={setCountryOfOrigin}
          setSourceMaterial={setSourceMaterial}
          setSort={setSort}
          setLayout={setLayout}
          search={search}
          genres={genresAndTags}
          year={year}
          season={season}
          formats={format}
          airingStatus={airingStatus}
          streamingOn={streamingOn}
          countryOfOrigin={countryOfOrigin}
          sourceMaterial={sourceMaterial}
          sort={sort}
          query={query}
          isLanding={showResults || title ? false : true}
          layout={layout}
        />
        {
          showResults || title ? 
          <Results layoutSelect={layout} hasRank={hasRank} query={queryFilter ? queryFilter : query} /> :
          <SearchLanding />
        }
      </div>
    </div>
  );
}

function FiterActiveMultiElement({filters, setFilters, filter}: {
  filters: string[] | undefined; 
  setFilters: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  filter: string;
}) {
  const [showCloseBtn, setShowCloseBtn] = useState(false);

  return (
    <div className='filter'
      onClick={() => {
        if (filters && filters.length) {
          setFilters(filters.filter(element => element != filter))
        }
      }}
      onMouseOver={() => setShowCloseBtn(true)}
      onMouseLeave={() => setShowCloseBtn(false)}>
      <span className='label'>{filter}</span>
      {showCloseBtn ? <div className='icon'>x</div> : null}
    </div>
  );
}

function FilterActiveMulti({filters, setFilters}: 
  {
    filters: string[] | undefined; 
    setFilters: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  }) {

  return (
    <>
      {filters && filters.length ?
        filters.map((filter: string) => {
          return <FiterActiveMultiElement key={`filteractive-${filter}`} filters={filters} filter={filter} setFilters={setFilters}/>
        }): null}
    </>
  );
}

function FilterActive({filter, setFilter, title}: 
  {
    title?: string;
    filter: string | number | undefined; 
    setFilter: React.Dispatch<React.SetStateAction<string | undefined>> | React.Dispatch<React.SetStateAction<number | undefined>>;
  }) {

  const [showCloseBtn, setShowCloseBtn] = useState(false);

  return (
    <>
      {filter ? 
        <div className='filter' key={filter}
          onClick={() => setFilter(undefined)}
          onMouseOver={() => setShowCloseBtn(true)}
          onMouseLeave={() => setShowCloseBtn(false)}>
          {title ? <span className='label'>{title + ': ' + filter}</span>: <span className='label'>{filter}</span>}
          {showCloseBtn ? <div className='icon'>x</div> : null}
        </div>
        : null}
    </>
  );
}

type FiltersActiveProps = {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  setGenres: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSeason: React.Dispatch<React.SetStateAction<string | undefined>>;
  setFormats: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setAiringStatus: React.Dispatch<React.SetStateAction<string | undefined>>;
  setStreamingOn: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setCountryOfOrigin: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSourceMaterial: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSort: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLayout: React.Dispatch<React.SetStateAction<number>>;
  search?: string | undefined;
  genres?: string[] | undefined;
  year?: number | undefined;
  season?: string | undefined;
  formats?: string[] | undefined;
  airingStatus?: string | undefined;
  streamingOn?: string[] | undefined;
  countryOfOrigin?: string | undefined;
  sourceMaterial?: string | undefined;
  sort: string | undefined;
  query: any;
  isLanding: boolean;
  layout: number;
}

function FiltersActive({
  setSearch,
  setGenres,
  setYear,
  setSeason,
  setFormats,
  setAiringStatus,
  setStreamingOn,
  setCountryOfOrigin,
  setSourceMaterial,
  setLayout,
  setSort,
  search,
  genres,
  year,
  season, 
  formats, 
  airingStatus, 
  streamingOn, 
  countryOfOrigin, 
  sourceMaterial,
  sort,
  query,
  isLanding,
  layout
  }: FiltersActiveProps) {
  const [showClearAll, setShowClearAll] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showActives, setShowActives] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowSortDropdown);

  const clearAll = () => {
    setSearch(undefined);
    setGenres(undefined);
    setYear(undefined);
    setSeason(undefined);
    setFormats(undefined);
    setAiringStatus(undefined);
    setStreamingOn(undefined);
    setCountryOfOrigin(undefined);
    setSourceMaterial(undefined);
    setSort(undefined);
    setSearchParams({});
  }

  useEffect(() => {
    if(!(genres && genres.length)) {
      setGenres(undefined);
    }
  }, [genres]);

  useEffect(() => {
    if (
      search || 
      genres && genres.length || 
      year || 
      season || 
      formats ||
      airingStatus || 
      streamingOn || 
      countryOfOrigin ||
      sourceMaterial) {
      setShowActives(true);
    } else {
     setShowActives(false);
    }
  }, [search, genres, year, season, formats, airingStatus, streamingOn, countryOfOrigin, sourceMaterial]);

  return (
    <div className='secondary-filters' onMouseOver={() => setShowClearAll(true)} onMouseLeave={() => setShowClearAll(false)}>
      <div className='active-filters'>
      {showActives ?
        <>
        <FaTags className='tags-icon'/>
        <FilterActive filter={search} setFilter={setSearch} title='Search' />
        <FilterActiveMulti filters={genres} setFilters={setGenres}/>
        <FilterActive filter={year} setFilter={setYear} />
        <FilterActive filter={season} setFilter={setSeason} />
        <FilterActiveMulti filters={formats} setFilters={setFormats}/>
        <FilterActive filter={airingStatus} setFilter={setAiringStatus} />
        <FilterActiveMulti filters={streamingOn} setFilters={setStreamingOn}/>
        <FilterActive filter={countryOfOrigin} setFilter={setCountryOfOrigin} />
        <FilterActive filter={sourceMaterial} setFilter={setSourceMaterial} />
        {showClearAll ? 
          <div className='filter' onClick={clearAll}>
            <span className='label'>Clear All</span>
            <div className='icon'>x</div>
          </div> : null}
        </>
      : null}
      </div>
      <div className='selects-wrap'>
      { isLanding ? null :
        <>
        <div className='sort-wrap sort-select' ref={wrapperRef}>
          <FaSort className='icon svg-inline--fa fa-w-10' />
          <span className='label' onClick={() => setShowSortDropdown(!showSortDropdown)}>{sort ? sort : getKeyByValue(sortQueries, query.variables.sort[0])}</span>
          {showSortDropdown ? <DropdownSort setShowSortDropdown={setShowSortDropdown} setSort={setSort} /> : null}
        </div>
        <div className='wrap'>
          <div className={`icon-wrap ${layout === 0 ? 'active' : ''}`} onClick={() => setLayout(0)}>
            <FaTh />
          </div>
          <div className={`icon-wrap ${layout === 1 ? 'active' : ''}`} onClick={() => setLayout(1)}>
            <FaThLarge />
          </div>
          <div className={`icon-wrap ${layout === 2 ? 'active' : ''}`} onClick={() => setLayout(2)}>
            <FaThList />
          </div>
        </div>
        </>
      }
      </div>
  </div>
  );
}

type DropdownSortProps = {
  setSort: React.Dispatch<React.SetStateAction<string | undefined>>;
  setShowSortDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

function DropdownSort({setSort, setShowSortDropdown}: DropdownSortProps) {
  return (
    <div className='dropdown'>
      {Object.keys(sortQueries).map((sort) => {
        return (
          <div className='option' key={`sort-${sort}`} 
            onClick={() => {
              setSort(sort)
              setShowSortDropdown(false);
            }}
          >{sort}</div>
        );
      })}
    </div>
  );
}

export default Search;
