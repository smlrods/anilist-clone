import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageContent from './components/PageContent'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

function App (): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <PageContent />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
