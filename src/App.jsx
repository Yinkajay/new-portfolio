// App.jsx
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'
import { AnimatePresence } from 'motion/react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Layout from './components/Layout'
import Loader from './pages/Loader'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" >
      <Routes location={location} key={location.pathname}>
        <Route index element={<Loader />} exit={{ opacity: 0 }} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}