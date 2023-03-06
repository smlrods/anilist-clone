import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

function useUpdateSearchParams(title: string, filter: string | number | undefined) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const name = title.toLowerCase();
    if(filter) {
      searchParams.set(name, filter.toString());
      setSearchParams(searchParams);
    } else {
      searchParams.delete(name)
      setSearchParams(searchParams);
    }
  }, [filter]);
}

function useUpdateSearchMultiParams(title: string, filter: string[] | undefined) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const name = title.toLowerCase();
    searchParams.delete(name)
    setSearchParams(searchParams);
    if(filter) {
      filter.forEach((element) => {
        searchParams.append(name, element);
      });
      setSearchParams(searchParams);
    } else {
      searchParams.delete(name)
      setSearchParams(searchParams);
    }
  }, [filter])
}

function useGetSearchParams(title: string, setFilter: React.Dispatch<React.SetStateAction<number | undefined>> | React.Dispatch<React.SetStateAction<string | undefined>>) {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let searchCurrent: any = params.get(title.toLowerCase());

    if(searchCurrent) {
      if(+searchCurrent) {
        searchCurrent = +searchCurrent;
        setFilter(searchCurrent);
      } else {
        setFilter(searchCurrent);
      }
    }
  }, []);
}

function useGetSearchMultiParams(title: string, setFilter: React.Dispatch<React.SetStateAction<string[]| undefined>>) {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchCurrent: any = params.getAll(title.toLowerCase());
    if(searchCurrent) {
      setFilter(searchCurrent);
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

export { useUpdateSearchParams, useUpdateSearchMultiParams, useGetSearchParams, useGetSearchMultiParams, useOutsideAlerter};
