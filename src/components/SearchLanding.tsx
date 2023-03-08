import SearchLandingSection from './SearchLandingSection'
import React from 'react'
import { allTimePopularQuery, popularThisSeasonQuery, top100Query, trendingQuery, upcomingNexTSeasonListQuery } from '../data/api/queries'

function SearchLanding (): JSX.Element {
  return (
    <div>
      <SearchLandingSection title="TRENDING NOW" query={trendingQuery} link={'/search/anime/trending'}/>
      <SearchLandingSection title="POPULAR THIS SEASON" query={popularThisSeasonQuery} link={'/search/anime/this-season'}/>
      <SearchLandingSection title="UPCOMING NEXT SEASON" query={upcomingNexTSeasonListQuery} link={'/search/anime/next-season'}/>
      <SearchLandingSection title="ALL TIME POPULAR" query={allTimePopularQuery}  link={'/search/anime/popular'} />
      <SearchLandingSection title="TOP 100 ANIME" query={top100Query} link={'/search/anime/top-100'}/>
    </div>
  )
}

export default SearchLanding
