import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageContent from './components/PageContent'
import React from 'react'

function App (): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <PageContent />
      <Footer />
    </div>
  )
}

export default App
