import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { getKeyByValue } from "../../data/utils";

function useUpdateSearchParams(title: string, filter: string | number | undefined, filterQueries?: {[key: string]: string | number}) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const name = title.toLowerCase();
    if(filter) {
      if (filterQueries) {
        const filterQuery = filterQueries[filter.toString()]
        searchParams.set(name, filterQuery.toString());
        setSearchParams(searchParams);
      } else {
        searchParams.set(name, filter.toString());
        setSearchParams(searchParams);
      }
    } else {
      searchParams.delete(name)
      setSearchParams(searchParams);
    }
  }, [filter]);
}

function useUpdateSearchMultiParams(title: string, filter: string[] | undefined, filterQueries?: {[key: string]: string | number}) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const name = title.toLowerCase();
    searchParams.delete(name)
    setSearchParams(searchParams);
    if(filter) {
      if (filterQueries) {
        filter.forEach((element) => {
          let filterQuery = filterQueries[element];
          searchParams.append(name, filterQuery.toString());
        });
        setSearchParams(searchParams);
      } else {
        filter.forEach((element) => {
          searchParams.append(name, element);
        });
        setSearchParams(searchParams);
      }
    } else {
      searchParams.delete(name)
      setSearchParams(searchParams);
    }
  }, [filter])
}

function useGetSearchParams(title: string, setFilter: React.Dispatch<React.SetStateAction<number | undefined>> | React.Dispatch<React.SetStateAction<string | undefined>>, filterQueries?: {[key: string]: string}) {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let searchCurrent: any = params.get(title.toLowerCase());

    if(searchCurrent) {
      if (filterQueries) {
        setFilter(getKeyByValue(filterQueries, searchCurrent));
      } else {
        if(+searchCurrent) {
          searchCurrent = +searchCurrent;
          setFilter(searchCurrent);
        } else {
          setFilter(searchCurrent);
        }
      }
    }
  }, []);
}

function useGetSearchMultiParams(title: string, setFilter: React.Dispatch<React.SetStateAction<string[]| undefined>>, filterQueries?: {[key: string]: string | number}) {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchCurrent: string[] = params.getAll(title.toLowerCase());
    if(searchCurrent && searchCurrent.length) {
      if (filterQueries) {
        const filterQuery: string[] = []

        searchCurrent.forEach((element) => {
          if (+element) {
            filterQuery.push(getKeyByValue(filterQueries, +element));
          } else {
            filterQuery.push(getKeyByValue(filterQueries, element));
          }
        });

        setFilter(filterQuery);
      } else {
        setFilter(searchCurrent);
      }
    }
  }, []);
}

// Hook that alerts clicks outside of the passed ref
function useOutsideAlerter(ref: any, setToggleDropdown: React.Dispatch<React.SetStateAction<boolean>>) {

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggleDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export { useUpdateSearchParams, useUpdateSearchMultiParams, useGetSearchParams, useGetSearchMultiParams, useOutsideAlerter };
