import './assets/index.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/home/Home'
import { Movie } from './pages/movie/Movie'
import { Tv } from './pages/tv/Tv'
import { Description } from './pages/description/Description'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movie />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/movies/:id' element={<Description />} />
        <Route path='/tv/:id' element={<Description />} />
      </Routes>
      <Footer />
    </>
  )
}
