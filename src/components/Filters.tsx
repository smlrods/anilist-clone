import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';
import { genresData, yearsData, seasonsData, formatsData, airingStatusData, streamingOnData, countryOfOriginData, sourceMaterialData, formatQueries, seasonsQueries, yearsQueries, airingStatusQueries, streamingOnQueries, countryOrOriginQueries, sourceMaterialQueries } from '../data/data';
import { useGetSearchMultiParams, useGetSearchParams, useUpdateSearchMultiParams, useUpdateSearchParams, useOutsideAlerter } from './hooks/filterHooks';
import { FaSistrix, FaCheckSquare, FaAngleDown, FaSlidersH } from 'react-icons/fa';

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
  useGetSearchParams('Season', setSeason, seasonsQueries);
  useGetSearchMultiParams('Format', setFormats, formatQueries);
  useGetSearchParams('Airing Status', setAiringStatus, airingStatusQueries);
  useGetSearchMultiParams('Streaming On', setStreamingOn, streamingOnQueries);
  useGetSearchParams('Country Of Origin', setCountryOfOrigin, countryOrOriginQueries);
  useGetSearchParams('Source Material', setSourceMaterial, sourceMaterialQueries);

  // Update URL Search Params
  useUpdateSearchMultiParams('Genres', genres);
  useUpdateSearchParams('Year', year);
  useUpdateSearchParams('Season', season, seasonsQueries);
  useUpdateSearchMultiParams('Format', formats, formatQueries);
  useUpdateSearchParams('Airing Status', airingStatus, airingStatusQueries);
  useUpdateSearchMultiParams('Streaming On', streamingOn, streamingOnQueries);
  useUpdateSearchParams('Country Of Origin', countryOfOrigin, countryOrOriginQueries);
  useUpdateSearchParams('Source Material', sourceMaterial, sourceMaterialQueries);

  return (
    <div className='filters-wrap primary-filters'>
      <div className='filters'>
        <FilterSearch setSearch={setSearch} search={search} />
        <FilterMulti title='Genres' setFilter={setGenres} filter={genres} filterData={genresData} />
        <Filter title='Year' setFilter={setYear} filter={year} filterData={yearsData} />
        <Filter title='Season' setFilter={setSeason} filter={season} filterData={seasonsData} />
        <FilterMulti title='Format' setFilter={setFormats} filter={formats} filterData={formatsData} />
        <Filter title='Airing Status' setFilter={setAiringStatus} filter={airingStatus} filterData={airingStatusData} />
      </div>
      <div className='extra-filters-wrap' ref={wrapperRef}>
        <div className='open-btn' onMouseUp={() => setShowMore(!showMore)}>
          <FaSlidersH />
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
    <div className='dropdown anime'>
      <div className='filters-wrap'>
        <FilterMulti title='Streaming On' setFilter={setStreamingOn} filter={streamingOn} filterData={streamingOnData} />
        <Filter title='Country Of Origin' setFilter={setCountryOfOrigin} filter={countryOfOrigin} filterData={countryOfOriginData} />
        <Filter title='Source Material' setFilter={setSourceMaterial} filter={sourceMaterial} filterData={sourceMaterialData} />
      </div>
    </div>
  );
}

function ClearInputIcon({ set }: { set: React.Dispatch<React.SetStateAction<any>> }) {
  return (
    <div className='clearFilterBtn' onClick={() => set(undefined)}>
      X
    </div>
  );
}

function FilterSearch({ setSearch, search }: {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
  search: string | undefined;
}) {

  const handleChange = (input: string): void => { setSearch(input) };
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const name = "search";
    if (search && search.length) {
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
    if (searchCurrent) {
      setSearch(searchCurrent);
    }
  }, []);

  return (
    <div className='filter filter-select'>
      <div className='name'>Search</div>
      <div className='search-wrap'>
        <div>
          <FaSistrix />
        </div>
        <input autoComplete='off' className='searchInput' type='search' value={search ? search : ''} onChange={(event) => handleChange(event.target.value)} />
        {!search ? null : <ClearInputIcon set={setSearch} />}
      </div>
    </div>
  )
}

function FilterDropdown({ filterData, setFilter, setSearch, filter, search, setShowSelected, setToggleDropdown }: {
  filterData: number[] | string[];
  setFilter: React.Dispatch<React.SetStateAction<number | undefined>> | React.Dispatch<React.SetStateAction<string | undefined>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filter: number | string | undefined;
  search: string;
  setShowSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
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
    <div className='options' onClick={() => setToggleDropdown(false)}>
      <div className='ps-container scroll-wrap ps'>
        <div className='option-group'>
          {filterData.map((filterData) => {
            if (filterData.toString().indexOf(search) !== -1) {
              return (
                <div className='option' key={filterData} onClick={() => addFilter(filter, filterData)}>
                  <div className='label'>
                    <div className='name'>{filterData}</div>
                    {filter === filterData ? <div>
                      <FaCheckSquare />
                    </div> : null}
                  </div>
                </div>);
            }
          })}
        </div>
      </div>
    </div>
  );
}

function Filter({ setFilter, filter, filterData, title }: {
  setFilter: React.Dispatch<React.SetStateAction<number | undefined>> | React.Dispatch<React.SetStateAction<string | undefined>>;
  filter: number | string | undefined;
  filterData: number[] | string[];
  title: string;
}) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [showSelected, setShowSelected] = useState(true);
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);

  const ref = useRef(null);
  useOutsideAlerter(ref, setToggleDropdown);

  useEffect(() => {
    setShowSelected(!toggleDropdown);
  }, [toggleDropdown]);

  return (
    <div className='filter filter-select'>
      <div className='name'>{title}</div>
      <div className='select-wrap' ref={ref}>
        <div className='select'>
          <div className='value-wrap'>
            {filter ?
              showSelected ?
                <div className='value' onClick={() => setToggleDropdown(true)}>{filter}</div> : null :
              showPlaceHolder ?
                <div className='placeholder' onClick={() => setToggleDropdown(true)}>Any</div> : null}
            <input
              className='filter'
              type='search'
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              onFocus={() => {
                setToggleDropdown(true)
                setShowSelected(false)
                setShowPlaceHolder(false)
              }}
              onBlur={() => {
                setShowPlaceHolder(true)
                setShowSelected(true)
              }}
            />
          </div>
          {filter ?
            <div onClick={() => setFilter(undefined)}>X</div> :
            <div onClick={() => setToggleDropdown(true)}>
              <FaAngleDown />
            </div>
          }
        </div>
        {toggleDropdown ?
          <FilterDropdown
            setShowSelected={setShowSelected}
            setToggleDropdown={setToggleDropdown}
            setSearch={setSearch}
            filterData={filterData}
            filter={filter}
            search={search}
            setFilter={setFilter} /> : null}
      </div>
    </div>
  )
}

function FilterMultiDropdown({ filterData, setFilter, setSearch, filter, search, setShowSelected }: {
  filterData: string[] | { [key: string]: string[] };
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

  const addFilter = (filter: string[] | undefined, filterData: string) => {
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
    <div className='options'>
      <div className='ps-container scroll-wrap ps'>
        {Array.isArray(filterData) ?
          filterData.map((filterData: string) => {
            if (filterData.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
              return (
                <div className='option-group' key={filterData} onClick={() => addFilter(filter, filterData)}>
                  <div className='option'>{filterData}</div>
                  {filter && filter.includes(filterData) ? <div>X</div> : null}
                </div>);
            }
          }) :
          Object.keys(filterData).map((key: any) => {
            return (
              <div className='option-group' key={key}>
                <div className='group-title'>{key}</div>
                {filterData[key].map((dataItem: string) => {
                  if (dataItem.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                    return (
                      <div className='option' key={dataItem} onClick={() => {
                        addFilter(filter, dataItem)
                        setSearch('');
                      }}>
                        <div className='label'>
                          <div className='name'>{dataItem}</div>
                          {filter && filter.includes(dataItem) ? <div className='selected-icon'><FaCheckSquare /></div> : null}
                        </div>
                      </div>
                    )
                  }
                })}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

function FilterMulti({ setFilter, filter, filterData, title }: {
  setFilter: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  filter: string[] | undefined;
  filterData: string[] | { [key: string]: string[] };
  title: string;
}) {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [showSelected, setShowSelected] = useState(true);
  const [showPlaceHolder, setShowPlaceHolder] = useState(true);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setToggleDropdown);

  return (
    <div className='filter filter-select'>
      <div className='name'>{title}</div>
      <div className='select-wrap' ref={wrapperRef}>
        <div className='select'>
          <div className='value-wrap'>
            {filter && filter.length ?
              showSelected ?
                <div className='tags'>
                  <div className='tag' onClick={() => setFilter(filter.slice(1))}>{filter[0]}</div>
                  {filter[1] ?
                    <div className='tag' onClick={() => setToggleDropdown(true)}>+{filter.length - 1}</div> : null
                  }
                </div> : null :
              showPlaceHolder ?
                <div className='placeholder' onClick={() => setToggleDropdown(true)}>Any</div> : null}
            <input
              className='filter'
              type='search'
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              onFocus={() => {
                setToggleDropdown(true)
                setShowSelected(false)
                setShowPlaceHolder(false)
              }}
              onBlur={() => {
                setShowSelected(true)
                setShowPlaceHolder(false)
                setShowPlaceHolder(true)
              }}
            />
          </div>
          {filter ?
            <div onClick={() => setFilter(undefined)}>X</div> :
            <div className='icon' onClick={() => setToggleDropdown(true)}>
              <FaAngleDown />
            </div>}
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
