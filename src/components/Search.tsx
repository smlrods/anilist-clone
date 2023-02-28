import Filters from './Filters'
import SearchLanding from './SearchLanding'
import React, { useEffect, useState } from 'react'

enum Genres {
  Action,
  Adventure,
  Comedy,
  Drama,
  Ecchi,
  Fantasy,
  Horror,
  Mahou,
  Shoujo,
  Mecha,
  Music,
  Mystery,
  Psychological,
  Romance,
  SciFi,
  SliceOfLife,
  Sports,
  Supernatural,
  Thriller  
}

function Search (): JSX.Element {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Filters setSearch={setSearch}/>
      <SearchLanding />
    </div>
  )
}

export default Search;
