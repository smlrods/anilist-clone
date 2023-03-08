import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Results, { Data } from './Results';

function SearchLandingSection ({ title, query, link }: { title: string, query: any, link: string }): JSX.Element {
  return (
    <div>
      <Link to={link}>
        <h2>{title}</h2>
        <div>View All</div>
      </Link>
      <Results query={query}/>
    </div>
  )
}

export default SearchLandingSection
