import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import background from '../assets/background.png'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen text-white' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <Navbar />
      <main className='flex-1 flex justify-center items-center'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout