import { useRef } from 'react'
import { motion } from "motion/react"
import Lottie from 'lottie-react'
import swing from '../assets/animations/swing.json'

const variants = {
  initial: { x: '-100vw', opacity: 1 },
  animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  exit: { x: '-100vw', opacity: 0, transition: { duration: 1 } }
}

const About = () => {
  const lottieRef = useRef()

  const handleMouseEnter = () => {
    lottieRef.current?.play()
  }

  const handleMouseLeave = () => {
    lottieRef.current?.pause()
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={swing}
        loop={true}
        autoplay={false}
        style={{ height: 500, backgroundolor: 'rgba(100,400,100,0.2)' }}
      />
    </motion.div>
  )
}

export default About
