import Filters from './Filters'
import SearchLanding from './SearchLanding'
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';

function Search (): JSX.Element {
  const [search, setSearch] = useState<string>();
  const [genres, setGenres] = useState<string[]>();
  const [year, setYear] = useState<number>();
  const [season, setSeason] = useState<string>();
  const [format, setFormat] = useState<string[]>();
  const [airingStatus, setAiringStatus] = useState<string>();
  const [streamingOn, setStreamingOn] = useState<string[]>();
  const [countryOfOrigin, setCountryOfOrigin] = useState<string>();
  const [sourceMaterial, setSourceMaterial] = useState<string>();
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  useEffect(() => {
    if(!location.search) {
      setSearch(undefined);
      setGenres(undefined);
      setYear(undefined);
      setSeason(undefined);
      setFormat(undefined);
      setFormat(undefined);
      setAiringStatus(undefined);
      setStreamingOn(undefined);
      setCountryOfOrigin(undefined);
      setSourceMaterial(undefined);
    }
  }, [location])

  /* useEffect(() => {
  }, []); */

  return (
    <div>
      <Filters 
        setSearch={setSearch}
        setGenres={setGenres}
        setYear={setYear}
        setSeason={setSeason}
        setFormats={setFormat}
        setAiringStatus={setAiringStatus}
        setStreamingOn={setStreamingOn}
        setCountryOfOrigin={setCountryOfOrigin}
        setSourceMaterial={setSourceMaterial}
        search={search}
        genres={genres}
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
        setGenres={setGenres}
        setYear={setYear}
        setSeason={setSeason}
        setFormats={setFormat}
        setAiringStatus={setAiringStatus}
        setStreamingOn={setStreamingOn}
        setCountryOfOrigin={setCountryOfOrigin}
        setSourceMaterial={setSourceMaterial}
        search={search}
        genres={genres}
        year={year}
        season={season}
        formats={format}
        airingStatus={airingStatus}
        streamingOn={streamingOn}
        countryOfOrigin={countryOfOrigin}
        sourceMaterial={sourceMaterial}
      />
      <SearchLanding />
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
