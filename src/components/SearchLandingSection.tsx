import { Link } from 'react-router-dom';
import Results from './Results';

function SearchLandingSection ({ title, query, link, layoutSelect, hasRank }: { title: string, query: any, link: string, layoutSelect: number, hasRank?: boolean }): JSX.Element {
  return (
    <div className='landing-section'>
      <Link className='title link' to={link}>
        <h2>{title}</h2>
        <div className='expand'>View All</div>
      </Link>
      <Results isLanding={true} query={query} hasRank={hasRank} layoutSelect={layoutSelect}/>
    </div>
  )
}

export default SearchLandingSection
