
import './App.css'
import Carousel from './components/carousel'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Selects from './components/Selects'
function App() {

  return (
    <>
       <Navbar/>
       <Hero/>
    <Destinations/>
    <Search/>
    <Selects/>
<Carousel/>
<Footer/>
    </>
  )
}

export default App
