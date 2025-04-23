import { motion } from "motion/react"
// import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import swing from '../assets/animations/swing.json'
import athlete3 from '../assets/animations/athlete3.json'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from "react"

const pageVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { x: '-100vw', opacity: 0, transition: { duration: 1 } }
};

const Home = () => {
    const lottieRef = useRef(null);
    
    useEffect(() => {
        const hasPlayedBefore = sessionStorage.getItem('athleteAnimationPlayed');
        
        if (lottieRef.current) {
            if (hasPlayedBefore === 'true') {
                lottieRef.current.goToAndStop(athlete3.op - 1, true);
            } else {
                lottieRef.current.play();
                sessionStorage.setItem('athleteAnimationPlayed', 'true');
            }
        }
    }, []);

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className='bg-whte w-full'>
            <div className="relative mx-auto px-[22%] md:px-[25%] w-full">
                <div className="mb-8">
                    <h1 className='text-3xl lg:text-4xl font-bold leading-none'>YINX.</h1>
                    <Lottie 
                        lottieRef={lottieRef}
                        className='absolute pt-1 left-0 top-0 right-0' 
                        animationData={athlete3} 
                        loop={false}
                        autoplay={false}
                        style={{ ackgroundColor: 'rgba(100,400,100,0.3)' }} 
                    />
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
                <Link className='underline' to={''}>LOOK AT MY CV</Link>
            </div>
        </motion.div>
    )
}

export default Home