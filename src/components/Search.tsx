import Filters from './Filters'
import SearchLanding from './SearchLanding'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Results from './Results';
import { airingStatusQueries, countryOrOriginQueries, formatQueries, genresData, seasonsQueries, sourceMaterialQueries, streamingOnData, streamingOnQueries } from '../data/data';
import { getKeyByValue } from '../data/utils';
import { filterQuery } from '../data/api/queries';

function Search ({title, query}: {title?: string, query: any}): JSX.Element {
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

  const [genresAndTags, setGenresAndTags] = useState<string[]>();

  const [showResults, setShowResults] = useState(false);

  const [queryFilter, setQueryFilter] = useState<{[key: string]: any}>();

  const location = useLocation();
  const navigate = useNavigate();

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
            ...(countryOfOrigin && {status: getKeyByValue(countryOrOriginQueries, countryOfOrigin)}),
            ...(sourceMaterial && {status: getKeyByValue(sourceMaterialQueries, sourceMaterial)}),
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
      setShowResults(false);
    } else {
      setShowResults(true);
      if (title) navigate('/search/anime', {replace: true});
      updateQuery();
    }
  }, [location])

  return (
    <div>
      {title ? <h1>{title}</h1> : null}
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
        search={search}
        genres={genresAndTags}
        year={year}
        season={season}
        formats={format}
        airingStatus={airingStatus}
        streamingOn={streamingOn}
        countryOfOrigin={countryOfOrigin}
        sourceMaterial={sourceMaterial}
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
        search={search}
        genres={genresAndTags}
        year={year}
        season={season}
        formats={format}
        airingStatus={airingStatus}
        streamingOn={streamingOn}
        countryOfOrigin={countryOfOrigin}
        sourceMaterial={sourceMaterial}
      />
      {showResults || title ? <Results query={queryFilter ? queryFilter : query} /> : <SearchLanding />}
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
    <div
      onClick={() => {
        if (filters) {
          setFilters(filters.filter(element => element != filter))
        }
      }}
      onMouseOver={() => setShowCloseBtn(true)}
      onMouseLeave={() => setShowCloseBtn(false)}>
      {filter}
      {showCloseBtn ? <div>X</div> : null}
    </div>
  );
}

function FilterActiveMulti({filters, setFilters}: 
  {
    filters: string[] | undefined; 
    setFilters: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  }) {

  return (
    <div>
      {filters && filters.length ?
        filters.map((filter: string) => {
          return <FiterActiveMultiElement key={`filteractive-${filter}`} filters={filters} filter={filter} setFilters={setFilters}/>
        }): null}
    </div>
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
    <div>
      {filter ? 
        <div key={filter}
          onClick={() => setFilter(undefined)}
          onMouseOver={() => setShowCloseBtn(true)}
          onMouseLeave={() => setShowCloseBtn(false)}>
          {title ? title + ': ' + filter: filter}
          {showCloseBtn ? <div>X</div> : null}
        </div>
        : null}
    </div>
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
  search?: string | undefined;
  genres?: string[] | undefined;
  year?: number | undefined;
  season?: string | undefined;
  formats?: string[] | undefined;
  airingStatus?: string | undefined;
  streamingOn?: string[] | undefined;
  countryOfOrigin?: string | undefined;
  sourceMaterial?: string | undefined;
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
  search,
  genres,
  year,
  season, 
  formats, 
  airingStatus, 
  streamingOn, 
  countryOfOrigin, 
  sourceMaterial}: FiltersActiveProps) {
  const [showClearAll, setShowClearAll] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

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
    setSearchParams({});
  }

  return (
    <div onMouseOver={() => setShowClearAll(true)} onMouseLeave={() => setShowClearAll(false)}>
      <div>Icon</div>
      <div>
        {showClearAll ? <div onClick={clearAll}>Clear All</div> : null}
        <FilterActive filter={search} setFilter={setSearch} title='Search' />
        <FilterActiveMulti filters={genres} setFilters={setGenres}/>
        <FilterActive filter={year} setFilter={setYear} />
        <FilterActive filter={season} setFilter={setSeason} />
        <FilterActiveMulti filters={formats} setFilters={setFormats}/>
        <FilterActive filter={airingStatus} setFilter={setAiringStatus} />
        <FilterActiveMulti filters={streamingOn} setFilters={setStreamingOn}/>
        <FilterActive filter={countryOfOrigin} setFilter={setCountryOfOrigin} />
        <FilterActive filter={sourceMaterial} setFilter={setSourceMaterial} />
      </div>
    </div>
  );
}

export default Search;
