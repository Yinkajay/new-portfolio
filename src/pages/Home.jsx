import { motion } from "motion/react"
import Lottie from 'lottie-react'
import athlete from '../assets/animations/athlete.json'
import mobileathlete from '../assets/animations/mobileathlete.json'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from "react"

const pageVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: {  opacity: 0, transition: { duration: 1 } }
};

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const lottieRef = useRef(null);

    const animationToPlay = width > 600 ? athlete : mobileathlete
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    useEffect(() => {
        const hasPlayedBefore = sessionStorage.getItem('athleteAnimationPlayed');
        
        if (lottieRef.current) {
            if (hasPlayedBefore === 'true') {
                lottieRef.current.goToAndStop(animationToPlay.op - 1, true);
            } else {
                lottieRef.current.play();
                sessionStorage.setItem('athleteAnimationPlayed', 'true');
            }
        }
    }, []);

    return (
        <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className='bg-whte w-full'>
            <div className="relative mx-auto pl-[19%] pr-[12%] md:px-[25%] w-full">
                <div className="mb-8">
                    <h1 className='text-3xl max-mobile:relative max-mobile:-top-[3px] lg:text-4xl font-bold leading-none'>YINX.</h1>
                    <Lottie 
                        lottieRef={lottieRef}
                        className='absolute pt-1 left-0 top-0 right-0 pointer-events-none' 
                        animationData={animationToPlay} 
                        loop={false}
                        autoplay={false}
                        style={{ ackgroundColor: 'rgba(100,400,100,0.3)' }} 
                    />
                </div>
                <p className="lg:text-lg">Frontend Engineer who loves building cool stuff.</p>

                <div className="mb-8 lg:text-lg">
                    <p className='mb-8'>Hey, I’m Yinka, a frontend engineer with 2 years of hands-on experience designing and developing modern, responsive websites and web applications. I specialize in turning complex ideas into clean, user-friendly interfaces that not only look great but work flawlessly across devices. My approach blends thoughtful design, accessibility, and clean, maintainable code to build solutions that users genuinely enjoy.</p>
                    <p>I’m always looking to improve my skills and stay up to date with the latest in frontend technologies and best practices. Outside of work, you’ll usually find me reading books, going for a run to clear my mind, or diving into YouTube to learn something new, whether it's a design principle, a coding concept, or a productivity tip.</p>
                </div>



                <div className="mb-8 -ml-[10%] md:-ml-[15%] ">
                    <ul className='flex gap-3 bg-amer-400 flex-wrap'>
                        <li className="">Stack:</li>
                        <li className="bg-[#1a1a1a] max-mobile:text-sm py-[2px] px-2 shadow-2xl rounded-full">React</li>
                        <li className="bg-[#1a1a1a] max-mobile:text-sm py-[2px] px-2 shadow-2xl rounded-full">React Native </li>
                        <li className="bg-[#1a1a1a] max-mobile:text-sm py-[2px] px-2 shadow-2xl rounded-full">Node</li>
                        <li className="bg-[#1a1a1a] max-mobile:text-sm py-[2px] px-2 shadow-2xl rounded-full">Javascript</li>
                        <li className="bg-[#1a1a1a] max-mobile:text-sm py-[2px] px-2 shadow-2xl rounded-full">HTML & CSS</li>
                        <li className="bg-[#1a1a1a] max-mobile:text-sm py-[2px] px-2 shadow-2xl rounded-full">Vue</li>
                        <li className="bg-[#1a1a1a] max-mobile:text-sm py-[2px] px-2 shadow-2xl rounded-full">Figma</li>
                        <li className="bg-[#1a1a1a] max-mobile:text-sm py-[2px] px-2 shadow-2xl rounded-full">Git</li>
                    </ul>
                </div>
                <Link className='underline' to='https://docs.google.com/document/d/1G9KDmwkUBLW0TzVpSFavC_oDN-7F_Pwe09aKfbvkJcA/edit?tab=t.0'>LOOK AT MY CV</Link>
            </div>
        </motion.div>
    )
}

export default Home