import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PageContent from './components/PageContent'
import { BrowserRouter } from 'react-router-dom'

function App (): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <PageContent />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
