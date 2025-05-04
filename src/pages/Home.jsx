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
    exit: {  opacity: 0, transition: { duration: 1 } }
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
                        className='absolute pt-1 left-0 top-0 right-0 pointer-events-none' 
                        animationData={athlete3} 
                        loop={false}
                        autoplay={false}
                        style={{ ackgroundColor: 'rgba(100,400,100,0.3)' }} 
                    />
                </div>
                <p>Frontend Engineer who loves building cool stuff.</p>

                <div className="mb-8">
                    <p className='mb-8'>Hey, I’m Yinka, a frontend engineer with 2 years of hands-on experience designing and developing modern, responsive websites and web applications. I specialize in turning complex ideas into clean, user-friendly interfaces that not only look great but work flawlessly across devices. My approach blends thoughtful design, accessibility, and clean, maintainable code to build solutions that users genuinely enjoy.</p>
                    <p>I’m always looking to improve my skills and stay up to date with the latest in frontend technologies and best practices. Outside of work, you’ll usually find me reading books, going for a run to clear my mind, or diving into YouTube to learn something new, whether it's a design principle, a coding concept, or a productivity tip.</p>
                </div>



                <div className="mb-8 -ml-[10%] md:-ml-[15%] ">
                    <ul className='flex gap-3 bg-amer-400 flex-wrap'>
                        <li>Stack:</li>
                        <li>React</li>
                        <li>React Native </li>
                        <li>Node</li>
                        <li>Javascript</li>
                        <li>HTML & CSS</li>
                        <li>Vue</li>
                        <li>Figma</li>
                        <li>Git</li>
                    </ul>
                </div>
                <Link className='underline' to='https://docs.google.com/document/d/1TOEhoPabfB1uKbiNEBdMuTKcSPwBbhK_2LTiQo95RiQ/edit?tab=t.0'>LOOK AT MY CV</Link>
            </div>
        </motion.div>
    )
}

export default Home