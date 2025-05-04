import { motion } from "motion/react"
import Lottie from 'lottie-react'
import swing from '../assets/animations/swing.json'
import athlete3 from '../assets/animations/athlete3.json'
import { useEffect, useRef } from 'react'

const pageVariants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: {  opacity: 0, transition: { duration: 1 } }
};
const About = () => {
  const lottieRef = useRef()

  useEffect(() => {
    if (lottieRef.current) lottieRef.current.goToAndStop(athlete3.op - 1, true)

  }, [])


  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className='w-full'
    >
      <div className=" relative px-[22%] md:px-[25%] w-full">
        <div className="mb-12">
          <h1 className='text-3xl lg:text-4xl font-bold leading-none mb-4'>ABOUT</h1>
          <Lottie lottieRef={lottieRef}
            className='absolute pt-1 left-0 top-0 right-0 pointer-events-none'
            animationData={athlete3}
            loop={false}
            autoplay={false}
            style={{ ackgroundColor: 'rgba(100,400,100,0.3)' }} />
          <p className='text-2xl mb-2'>Who i am & What i get up to</p>
          <p className='text-lg'>Outside of writing code, I enjoy staying active and mentally sharp through activities like reading, running, and exploring new ideas on YouTube. I'm passionate about continuous learning, whether it's diving into a new JavaScript framework or watching a breakdown of user behavior in digital products.</p>
          <p className='text-lg'>Music is a big part of my routine. I’m always curating playlists that help me stay focused and creative during long coding sessions. Whether it's ambient instrumentals or low-fi beats, the right track helps me get into a productive flow. I bring that same energy and curiosity into every project I work on. I’m always looking to improve, stay adaptable, and build things that make a real impact.
</p>
        </div>
      </div>
    </motion.div>
  )
}

export default About
