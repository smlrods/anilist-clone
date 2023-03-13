import React from 'react'
import { Link } from 'react-router-dom'

function Landing (): JSX.Element {
  return (
    <div className='landing'>
      <div>
        <h1>The next-generation anime platform</h1>
        <h2>Track, share, and discover your favorite anime and manga with AniList.</h2>
      </div>
      <FeaturesCards />
      <Link className='join-btn' to='/signup'>
        <div>
          <div className='label'>Join now</div>
          <div className='square'>&gt;</div>
        </div>
      </Link>
    </div>
  )
}

const cardsInfo = [
  {
    icon: 'https://anilist.co/img/landing/stats.svg',
    title: 'Discover your obsessions',
    description: 'What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.'
  },
  {
    icon: 'https://anilist.co/img/landing/apps.svg',
    title: 'Bring AniList anywhere',
    description: 'Keep track of your progress on-the-go with one of many AniList apps across iOS, Android, macOS, and Windows.'
  },
  {
    icon: 'https://anilist.co/img/landing/social.svg',
    title: 'Join the conversation',
    description: 'Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.'
  },
  {
    icon: 'https://anilist.co/img/landing/custom.svg',
    title: 'Tweak it to your liking',
    description: 'Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.'
  }
]

function FeaturesCards (): JSX.Element {
  return (
    <div className="feature-cards">
      {cardsInfo.map((card) => {
        return <Card key={card.title} iconURL={card.icon} title={card.title} description={card.description}/>
      })}
    </div>
  )
}

function Card ({ iconURL, title, description }: { iconURL: string, title: string, description: string }): JSX.Element {
  return (
    <div className="feature-card">
      <div className="icon">
        <img src={iconURL} />
      </div>
      <div>
        <h3 className="title">{title}</h3>
        <div className="description">{description}</div>
      </div>
    </div>
  )
}

export default Landing
