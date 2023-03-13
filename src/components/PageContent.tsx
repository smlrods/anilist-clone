import Landing from './Landing'
import Search from './Search'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { allTimePopularQuery, filterQuery, popularThisSeasonQuery, top100Query, trendingQuery, upcomingNexTSeasonListQuery } from '../data/api/queries';

function Home(): JSX.Element {
  return (
    <div className='wrap'>
      <Landing />
      <Search query={trendingQuery}/> 
    </div>
  );
}

function Social(): JSX.Element {
  return (
    <div>
      <h2>Social</h2>
    </div>
  );
}

function Forum(): JSX.Element {
  return (
    <div>
      <h2>Forum</h2>
    </div>
  );
}

function Login(): JSX.Element {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function Signup(): JSX.Element {
  return (
    <div>
      <h2>Sign up</h2>
    </div>
  );
}

function PageContent (): JSX.Element {
  return (
    <div className='page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/anime' element={<Search query={filterQuery} />} />
          <Route path='/search/anime/trending' element={<Search title='Trending Anime' query={trendingQuery}/>} />
          <Route path='/search/anime/top-100' element={<Search hasRank={true} title='Top 100 Anime' query={top100Query}/>} />
          <Route path='/search/anime/top-movies' element={<Search title='Top Anime Movies' query={trendingQuery}/>} />
          <Route path='/search/anime/this-season' element={<Search title='Winter 2023 Anime' query={popularThisSeasonQuery}/>} />
          <Route path='/search/anime/next-season' element={<Search title='Anime Next Season - Airing Spring 2023' query={upcomingNexTSeasonListQuery}/>} />
          <Route path='/search/anime/popular' element={<Search title='All-Time Popular Anime' query={allTimePopularQuery}/>} />
          <Route path='/search/manga' element={<Search query={trendingQuery} />} />
          <Route path='/search/manga/top-100' element={<Search title='Trending Manga' query={trendingQuery}/>} />
          <Route path='/search/manga/trending' element={<Search title='Top 100 Manga' query={trendingQuery}/>} />
          <Route path='/search/manga/top-manhwa' element={<Search title='Top Manhwa' query={trendingQuery}/>} />
          <Route path='/social' element={<Social />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </div>
  )
}

export default PageContent
