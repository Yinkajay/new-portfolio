import { motion } from "motion/react"
// import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import swing from '../assets/animations/swing.json'
import athlete3 from '../assets/animations/athlete3.json'
import { Link } from 'react-router-dom'

const pageVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { x: '-100vw', opacity: 0, transition: { duration: 1 } }
};

const Home = () => {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className='bg-whie w-full'>
            <div className="relative mx-auto px-[22%] md:px-[25%] w-full">
                <div className="mb-8">
                    <h1 className='text-3xl font-bold leading-none'>YINX.</h1>
                    <Lottie className='absolute pt-1 left-0 top-0 right-0' autoPlay={false} animationData={athlete3} loop={false} style={{ ackgroundColor: 'rgba(100,400,100,0.3)' }} />
                </div>
                <p>Frontend Engineer who loves building cool stuff.</p>

                <div className="mb-8">
                    <p className='mb-8'>What's up! I'm yinka, a frontend engineer with 5 years of experience crafting websites and apps that people actually enjoy using. I'm all about that sweet spot where good-looking design meets clean code.</p>
                    <p>When I'm not glued to my keyboard, you'll find me binge-watching anime, cheering for Arsenal through the highs and lows, or getting way too competitive in video games</p>
                </div>

                <div className="mb-8">
                    <ul className='flex gap-3 -ml-4'>
                        <li>Stack:</li>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>HTML & CSS</li>
                        <li>Git</li>
                    </ul>
                </div>
                

                <Link className='underline'>LOOK AT MY CV</Link>
            </div>
        </motion.div>
    )
}

export default Home