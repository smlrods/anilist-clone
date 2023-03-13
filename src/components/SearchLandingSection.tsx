import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Results, { Data } from './Results';

function SearchLandingSection ({ title, query, link, layoutSelect, amount, hasRank }: { title: string, query: any, link: string, layoutSelect: number, amount: number, hasRank?: boolean }): JSX.Element {
  return (
    <div className='landing-section'>
      <Link className='title link' to={link}>
        <h2>{title}</h2>
        <div className='expand'>View All</div>
      </Link>
      <Results amount={amount} query={query} hasRank={hasRank} layoutSelect={layoutSelect}/>
    </div>
  )
}

export default SearchLandingSection
