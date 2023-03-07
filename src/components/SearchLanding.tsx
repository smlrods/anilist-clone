import SearchLandingSection from './SearchLandingSection'
import React from 'react'
import { trending } from '../data/data';

function SearchLanding (): JSX.Element {
  return (
    <div>
      <SearchLandingSection title="TRENDING NOW" data={trending} link={'/search/anime/trending'}/>
      <SearchLandingSection title="POPULAR THIS SEASON" data={trending} link={'/search/anime/this-season'}/>
      <SearchLandingSection title="UPCOMING NEXT SEASON" data={trending} link={'/search/anime/next-season'}/>
      <SearchLandingSection title="ALL TIME POPULAR" data={trending}  link={'/search/anime/popular'} />
      <SearchLandingSection title="TOP 100 ANIME" data={trending} link={'/search/anime/top-100'}/>
    </div>
  )
}

export default SearchLanding
