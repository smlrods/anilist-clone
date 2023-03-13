import React, { useState } from 'react'
import { FaBookOpen, FaPlay, FaStar, FaThumbsUp, FaUserAstronaut, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SearchDropdown(): JSX.Element {
  return (
    <div className='search-dropdown'>
      <div className='primary-links'>
        <div className='primary-link'>
          <Link className='icon' to='/search/anime'>
            <FaPlay />
          </Link>
          <section>
            <Link className='primary-link-text' to='/search/anime'>Anime</Link>
            <div className='secondary-links'>
              <Link to='/search/anime/top-100'>Top 100</Link>
              <Link to='/search/anime/trending'>Trending</Link>
              <Link to='/search/anime/top-movies'>Top Movies</Link>
            </div>
          </section>
        </div>
        <div className='primary-link'>
          <Link className='icon' to='/search/manga'>
            <FaBookOpen />
          </Link>
          <section>
            <Link className='primary-link-text' to='/search/manga'>Manga</Link>
            <div className='secondary-links'>
              <Link to='/search/manga/top-100'>Top 100</Link>
              <Link to='/search/manga/trending'>Trending</Link>
              <Link to='/search/manga/top-movies'>Top Movies</Link>
            </div>
          </section>
        </div>
      </div>
      <div className='footer'>
        <Link to='/search/staff'>
         <FaUserTie />
        Staff</Link>
        <Link to='/search/characters'>
          <FaUserAstronaut />
        Characters</Link>
        <Link to='/search/reviews'>
         <FaStar />
        Reviews</Link>
        <Link to='/recomendations'>
          <FaThumbsUp />
        Recomendations</Link>
      </div>
    </div>
  );
}

function Navbar (): JSX.Element {
  const [toggleDropdown, setToggleDropwn] = useState(false);
  return (
    <div className='navbar'>
      <Link to="/">Anilist Clone</Link>
      <div>
        <div>
          <div onMouseOver={() => setToggleDropwn(true)} onMouseLeave={() => setToggleDropwn(false)}>
            <Link to="/search/anime" >Search</Link>
            {toggleDropdown ? <SearchDropdown /> : null}
          </div>
          <Link to="/social">Social</Link>
          <Link to="/forum">Forum</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
          <Link className='signup' to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
