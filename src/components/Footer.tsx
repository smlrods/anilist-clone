import React from 'react'

function Footer (): JSX.Element {
  return (
    <div id="Footer">
      <div className="theme-selector">
        <h2>Site Theme</h2>
        <div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
          <div>A</div>
        </div>
      </div>
      <div className="links">
        <div className="section">
          <a href="#">Donate</a>
          <a href="#">Anilist.co</a>
          <a href="#">AniChart.net</a>
        </div>
        <div className="section">
          <a href="#">Apps</a>
          <a href="#">Site Stats</a>
          <a href="#">Recomendations</a>
          <a href="#">API</a>
        </div>
        <div className="section">
          <a href="#">Discord</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Github</a>
        </div>
        <div className="section">
          <a href="#">Add Data</a>
          <a href="#">Moderators</a>
          <a href="#">Contact</a>
          <a href="#">Term & Privacy</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
