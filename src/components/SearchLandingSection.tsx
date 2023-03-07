import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Results, { Data } from './Results';

function SearchLandingSection ({ title, data, link }: { title: string, data: Data[], link: string }): JSX.Element {
  return (
    <div>
      <Link to={link}>
        <h2>{title}</h2>
        <div>View All</div>
      </Link>
      <Results data={data}/>
    </div>
  )
}

export default SearchLandingSection
