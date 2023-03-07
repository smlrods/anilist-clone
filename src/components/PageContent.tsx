import Landing from './Landing'
import Search from './Search'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchLanding from './SearchLanding';

function Home(): JSX.Element {
  return (
    <div>
      <Landing />
      <Search /> 
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
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/anime' element={<Search />} />
          <Route path='/search/anime/trending' element={<Search title='Trending Anime'/>} />
          <Route path='/search/anime/top-100' element={<Search title='Top 100 Anime'/>} />
          <Route path='/search/anime/top-movies' element={<Search title='Top Anime Movies'/>} />
          <Route path='/search/anime/this-season' element={<Search title='Winter 2023 Anime'/>} />
          <Route path='/search/anime/next-season' element={<Search title='Anime Next Season - Airing Spring 2023'/>} />
          <Route path='/search/anime/popular' element={<Search title='All-Time Popular Anime'/>} />
          <Route path='/search/manga' element={<Search />} />
          <Route path='/search/manga/top-100' element={<Search title='Trending Manga'/>} />
          <Route path='/search/manga/trending' element={<Search title='Top 100 Manga' />} />
          <Route path='/search/manga/top-manhwa' element={<Search title='Top Manhwa' />} />
          <Route path='/social' element={<Social />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </div>
  )
}

export default PageContent
