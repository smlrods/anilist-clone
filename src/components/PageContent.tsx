import Landing from './Landing'
import Search from './Search'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
          <Route path='/search/anime/top-100' element={<Search />} />
          <Route path='/search/anime/trending' element={<Search />} />
          <Route path='/search/anime/top-movies' element={<Search />} />
          <Route path='/search/manga' element={<Search />} />
          <Route path='/search/manga/top-100' element={<Search />} />
          <Route path='/search/manga/trending' element={<Search />} />
          <Route path='/search/manga/top-movies' element={<Search />} />
          <Route path='/social' element={<Social />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
    </div>
  )
}

export default PageContent
