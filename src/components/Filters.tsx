import React, { useState } from 'react'

function Filters({setSearch}: {setSearch: React.Dispatch<React.SetStateAction<string>>}): JSX.Element {
  return (
    <div>
      <FilterSection type="text" title="Search" />
      <FilterSection type="text" title="Genres" />
      <FilterSection type="text" title="Year" />
      <FilterSection type="text" title="Season" />
      <FilterSection type="text" title="Format" />
      <FilterSection type="text" title="Airing Status" />
    </div>
  )
}

function FilterSection ({ type, title }: { type: string, title: string }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <input type={type} />
      </div>
    </div>
  )
}

export default Filters
