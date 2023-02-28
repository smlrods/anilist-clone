import SearchLandingSection from './SearchLandingSection'
import React from 'react'
import { trending } from '../data/data';

function SearchLanding (): JSX.Element {
  return (
    <div>
      <SearchLandingSection title="TRENDING NOW" data={trending} />
      <SearchLandingSection title="POPULAR THIS SEASON" data={trending} />
      <SearchLandingSection title="UPCOMING NEXT SEASON" data={trending} />
      <SearchLandingSection title="ALL TIME POPULAR" data={trending} />
      <SearchLandingSection title="TOP 100 ANIME" data={trending} />
    </div>
  )
}

export default SearchLanding
