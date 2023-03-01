import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SearchDropdown(): JSX.Element {
  return (
    <div>
      <div>
        <div>
          <Link to='/search/anime'>Icon</Link>
        </div>
        <div>
          <Link to='/search/anime'>Anime</Link>
          <div>
            <Link to='/search/anime/top-100'>Top 100</Link>
            <Link to='/search/anime/trending'>Trending</Link>
            <Link to='/search/anime/top-movies'>Top Movies</Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Link to='/search/manga'>Icon</Link>
        </div>
        <div>
          <Link to='/search/manga'>Manga</Link>
          <div>
            <Link to='/search/manga/top-100'>Top 100</Link>
            <Link to='/search/manga/trending'>Trending</Link>
            <Link to='/search/manga/top-movies'>Top Movies</Link>
          </div>
        </div>
      </div>
      <div>
        <Link to='/search/staff'>Staff</Link>
        <Link to='/search/characters'>Characters</Link>
        <Link to='/search/reviews'>Reviews</Link>
        <Link to='/recomendations'>Recomendations</Link>
      </div>
    </div>
  );
}

function Navbar (): JSX.Element {
  const [toggleDropdown, setToggleDropwn] = useState(false);
  return (
    <div>
      <Link to="/">Logo</Link>
      <div>
        <div onMouseOver={() => setToggleDropwn(true)} onMouseLeave={() => setToggleDropwn(false)}>
          <Link to="/search/anime" >Search</Link>
          {toggleDropdown ? <SearchDropdown /> : null}
        </div>
        <Link to="/social">Social</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
