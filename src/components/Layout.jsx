import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import background from '../assets/background.png'
import background2 from '../assets/background2.png'
import Footer from './Footer'

const Layout = () => {

  // const isMobile = false
  // const bg = isMobile ? background2 : background
  return (
    <div className='flex flex-col min-h-screen relative mx-auto text-white' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <section className="min-w-full max-w-screen-2xl mx-auto pb-20">
        <Navbar />
        <main className='flex-1 w-full bg-rd-400 flex justify-center items-start'>
          <Outlet />
        </main>
        <Footer />
      </section>
    </div>
  )
}

export default Layout