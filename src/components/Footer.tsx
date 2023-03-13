import React from 'react'

function Footer (): JSX.Element {
  return (
    <div className='footer'>
      <div className='container'>
        <div className="theme-selector">
          <h2>Site Theme</h2>
          <div className='theme-preview default'>A
            <span className='tooltip'>Default</span>
          </div>
          <div className='theme-preview dark'>A
            <span className='tooltip'>Dark</span>
          </div>
          <div className='theme-preview contrast'>A
            <span className='tooltip'>Contrast</span>
          </div>
          <div className='theme-preview system'>A
            <span className='tooltip'>System Theme</span>
          </div>
        </div>
        <div className="links">
          <section className="section">
            <a href="#">Donate</a>
            <a href="#">Anilist.co</a>
            <a href="#">AniChart.net</a>
          </section>
          <section className="section">
            <a href="#">Apps</a>
            <a href="#">Site Stats</a>
            <a href="#">Recomendations</a>
            <a href="#">API</a>
          </section>
          <section className="section">
            <a href="#">Discord</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
            <a href="#">Github</a>
          </section>
          <section className="section">
            <a href="#">Add Data</a>
            <a href="#">Moderators</a>
            <a href="#">Contact</a>
            <a href="#">Term & Privacy</a>
            <a href="#">Site Map</a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Footer
