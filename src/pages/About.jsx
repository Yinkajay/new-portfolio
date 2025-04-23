import { motion } from "motion/react"
import Lottie from 'lottie-react'
import swing from '../assets/animations/swing.json'
import athlete3 from '../assets/animations/athlete3.json'
import { useEffect, useRef } from 'react'

const variants = {
  initial: { x: '-100vw', opacity: 1 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  exit: { x: '-100vw', opacity: 0, transition: { duration: 1 } }
}

const About = () => {
  const lottieRef = useRef()

  useEffect(() => {
    if (lottieRef.current) lottieRef.current.goToAndStop(athlete3.op - 1, true)

  }, [])


  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className='w-full'
    >
      <div className=" relative px-[22%] md:px-[25%] w-full">
        <div className="mb-12">
          <h1 className='text-3xl lg:text-4xl font-bold leading-none mb-4'>ABOUT</h1>
          <Lottie lottieRef={lottieRef}
            className='absolute pt-1 left-0 top-0 right-0'
            animationData={athlete3}
            loop={false}
            autoplay={false}
            style={{ ackgroundColor: 'rgba(100,400,100,0.3)' }} />
          <p className='text-xl'>Who i am & What i get up to</p>
          <p className='text-xl'>When I'm not glued to my keyboard, you'll find me binge-watching anime (currently obsessed with Jujutsu Kaisen), cheering for Arsenal through the highs and lows, or getting way too competitive in video games</p>
          <p className='text-xl'> I'm also a huge music nerd – everything from discovering obscure indie bands to creating coding playlists that keep me in the zone. Nothing beats solving a tough bug while blasting the perfect track.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
