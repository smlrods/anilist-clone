import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import { genresData, yearsData, seasonsData, formatsData, airingStatusData, streamingOnData, countryOfOriginData, sourceMaterialData } from '../data/data';
import { useGetSearchMultiParams, useGetSearchParams, useUpdateSearchMultiParams, useUpdateSearchParams, useOutsideAlerter } from './hooks/filterHooks';

type FiltersProps = {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  setGenres: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setYear: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSeason: React.Dispatch<React.SetStateAction<string | undefined>>;
  setFormats: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setAiringStatus: React.Dispatch<React.SetStateAction<string | undefined>>;
  setStreamingOn: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setCountryOfOrigin: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSourceMaterial: React.Dispatch<React.SetStateAction<string | undefined>>;
  search: string | undefined;
  genres: string[] | undefined;
  year: number | undefined;
  season: string | undefined;
  formats: string[] | undefined;
  airingStatus: string | undefined;
  streamingOn: string[] | undefined;
  countryOfOrigin: string | undefined;
  sourceMaterial: string | undefined;
};

function Filters({
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
  sourceMaterial
  }: FiltersProps): JSX.Element {

  const [showMore, setShowMore] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setShowMore);

  // Get URL Search Params
  useGetSearchMultiParams('Genres', setGenres);
  useGetSearchParams('Year', setYear);
  useGetSearchParams('Season', setSeason);
  useGetSearchMultiParams('Format', setFormats);
  useGetSearchParams('Airing Status', setAiringStatus);
  useGetSearchMultiParams('Streaming On', setStreamingOn);
  useGetSearchParams('Country Of Origin', setCountryOfOrigin);
  useGetSearchParams('Source Material', setSourceMaterial);

  // Update URL Search Params
  useUpdateSearchMultiParams('Genres', genres);
  useUpdateSearchParams('Year', year);
  useUpdateSearchParams('Season', season);
  useUpdateSearchMultiParams('Format', formats);
  useUpdateSearchParams('Airing Status', airingStatus);
  useUpdateSearchMultiParams('Streaming On', streamingOn);
  useUpdateSearchParams('Country Of Origin', countryOfOrigin);
  useUpdateSearchParams('Source Material', sourceMaterial);

  return (
    <div>
      <div>
        <FilterSearch setSearch={setSearch} search={search} />
        <FilterMulti  title='Genres' setFilter={setGenres} filter={genres} filterData={genresData}/>
        <Filter  title='Year' setFilter={setYear} filter={year} filterData={yearsData}/>
        <Filter  title='Season' setFilter={setSeason} filter={season} filterData={seasonsData}/>
        <FilterMulti  title='Format' setFilter={setFormats} filter={formats} filterData={formatsData}/>
        <Filter  title='Airing Status' setFilter={setAiringStatus} filter={airingStatus} filterData={airingStatusData}/>
      </div>
      <div ref={wrapperRef}>
        <div onMouseUp={() => setShowMore(!showMore)}>
          <button>Show more filters</button>
        </div>
        {showMore ?
          <MoreFiltersDropdown 
            streamingOn={streamingOn}
            setStreamingOn={setStreamingOn}
            countryOfOrigin={countryOfOrigin}
            setCountryOfOrigin={setCountryOfOrigin}
            sourceMaterial={sourceMaterial}
            setSourceMaterial={setSourceMaterial}
          /> : null}
      </div>
    </div>
  );
}

function MoreFiltersDropdown({
  streamingOn,
  setStreamingOn,
  countryOfOrigin,
  setCountryOfOrigin,
  sourceMaterial,
  setSourceMaterial,
}: {
  streamingOn: string[] | undefined;
  countryOfOrigin: string | undefined;
  sourceMaterial: string | undefined;
  setStreamingOn: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setCountryOfOrigin: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSourceMaterial: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <div>
      <div>
        <FilterMulti  title='Streaming On' setFilter={setStreamingOn} filter={streamingOn} filterData={streamingOnData}/>
        <Filter  title='Country Of Origin' setFilter={setCountryOfOrigin} filter={countryOfOrigin} filterData={countryOfOriginData}/>
        <Filter  title='Source Material' setFilter={setSourceMaterial} filter={sourceMaterial} filterData={sourceMaterialData}/>
      </div>
    </div>
  );
}

function ClearInputIcon({set}: {set:React.Dispatch<React.SetStateAction<any>>}) {
  return (
    <div onClick={() => set(undefined)}>
      X
    </div>
  );
}

function FilterSearch({setSearch, search}: {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  search: string | undefined;
}) {

  const handleChange = (input: string): void => { setSearch(input) };
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const name = "search";
    if(search && search.length) {
      searchParams.set(name, search);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(name)
      setSearchParams(searchParams);
    }
  }, [search]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchCurrent = params.get("search");
    if(searchCurrent) {
      setSearch(searchCurrent);
    }
  }, []);

  return (
    <div>
      <label htmlFor='search'>Search</label>
      <div>
        <div>Icon</div>
        <input type='search' id='search' value={search ? search : ''} onChange={(event) => handleChange(event.target.value)}/>
        {!search ? null : <ClearInputIcon set={setSearch}/>}
      </div>
    </div>
  )
}

function FilterDropdown({filterData, setFilter, setSearch, filter, search, setShowSelected}: {
  filterData: number[] | string[];
  setFilter: React.Dispatch<React.SetStateAction<number | undefined>> | React.Dispatch<React.SetStateAction<string | undefined>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: number | string | undefined;
  search: string;
  setShowSelected: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
  
  const addFilter = (filter: number | string | undefined, filterData: any) => {
    if (filter && filter === filterData) {
      setFilter(undefined);
      return;
    }
    setFilter(filterData);
    setShowSelected(true);
    setSearch('');
  }

  return (
    <div>
      {filterData.map((filterData) => {
        if (filterData.toString().indexOf(search) !== -1) {
          return (
            <div key={filterData} onClick={() => addFilter(filter, filterData)}>
              <div>{filterData}</div>
              {filter === filterData ? <div>X</div> : null}
            </div>);
        }
      })}
    </div>
  );
}

function Filter({setFilter, filter, filterData, title}: {
  setFilter: React.Dispatch<React.SetStateAction<number | undefined>> | React.Dispatch<React.SetStateAction<string | undefined>>;
  filter: number | string | undefined;
  filterData: number[] | string[];
  title: string;
}) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [showSelected, setShowSelected] = useState(true);

  const ref = useRef(null);
  useOutsideAlerter(ref, setToggleDropdown);

  useEffect(() => {
   setShowSelected(!toggleDropdown);
  }, [toggleDropdown]);

  return (
    <div>
      <label>{title}</label>
      <div ref={ref}>
        <div>
          { filter ?
            showSelected ?
            <div onClick={() => setToggleDropdown(true)}>{filter}</div>: null :
            <div onClick={() => setToggleDropdown(true)}>any</div> }
          <input
            type='search'
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            onFocus={() => {
              setToggleDropdown(true)
              setShowSelected(false)
              }}/>
          {filter ?
          <div onClick={() => setFilter(undefined)}>X</div> :
          <div onClick={() => setToggleDropdown(true)}>V</div>
          }
        </div>
        {toggleDropdown ?
          <FilterDropdown
            setShowSelected={setShowSelected}
            setSearch={setSearch}
            filterData={filterData}
            filter={filter}
            search={search}
            setFilter={setFilter} /> : null}
      </div>
    </div>
  )
}

function FilterMultiDropdown({filterData, setFilter, setSearch, filter, search, setShowSelected}: {
  filterData: string[] | {[key: string]: string[]};
  setFilter: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: string[] | undefined;
  search: string;
  setShowSelected: React.Dispatch<React.SetStateAction<boolean>>;
  }) {

  useEffect(() => {
    if (!filter) return;
    if (!filter.length) setFilter(undefined);
  }, [filter]);
  
  const addFilter = (filter: string[] | undefined, filterData: string ) => {
    if (filter === undefined) {
      setFilter([filterData]);
      setShowSelected(true);
      return;
    } else if (filter.includes(filterData)) {
      setFilter(filter.filter((element) => element != filterData));
      return;
    }
    setFilter([...filter, filterData]);
    setShowSelected(true);
    setSearch('');
  }

  return (
    <div>
      {Array.isArray(filterData) ?
      filterData.map((filterData: string) => {
        if (filterData.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
          return (
            <div key={filterData} onClick={() => addFilter(filter, filterData)}>
              <div>{filterData}</div>
              {filter && filter.includes(filterData) ? <div>X</div> : null}
            </div>);
        }
      }) : 
      Object.keys(filterData).map((key: any) => {
        return (
          <div key={key}>
            <h1>{key}</h1>
            <div>
              {filterData[key].map((dataItem: string) => {
                if (dataItem.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                  return (
                    <div key={dataItem} onClick={() => {
                      addFilter(filter, dataItem)
                      setSearch('');
                    }}>
                      <div>{dataItem}</div>
                      {filter && filter.includes(dataItem) ? <div>x</div> : null} 
                    </div>
                  )
                }
              })}
            </div>
          </div>
        );
      })
      }
    </div>
  );
}

function FilterMulti({setFilter, filter, filterData, title}: {
  setFilter: React.Dispatch<React.SetStateAction<string[]| undefined>>;
  filter: string[] | undefined;
  filterData: string[] | {[key: string]: string[]};
  title: string;
}) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [showSelected, setShowSelected] = useState(true);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setToggleDropdown);

  return (
    <div>
      <label>{title}</label>
      <div ref={wrapperRef}>
        <div>
        { filter ?
          showSelected ?
            <div>
              <div onClick={() => setFilter(filter.slice(1))}>{filter[0]}</div>
              {filter[1] ?
                <div onClick={() => setToggleDropdown(true)}>+{filter.length - 1}</div> : null
              }
            </div> : null : 

            <div onClick={() => setToggleDropdown(true)}>any</div>}
          <input
            type='search'
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
            onFocus={() => {
              setToggleDropdown(true)
              setShowSelected(false)
              }}/>
          {filter ?
          <div onClick={() => setFilter(undefined)}>X</div> :
          <div onClick={() => setToggleDropdown(true)}>V</div>
          }
        </div>
        {toggleDropdown ?
          <FilterMultiDropdown
            setShowSelected={setShowSelected}
            setSearch={setSearch}
            filterData={filterData}
            filter={filter}
            search={search}
            setFilter={setFilter} /> : null}
      </div>
    </div>
  )
}

export default Filters
