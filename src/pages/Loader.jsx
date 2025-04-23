import { motion } from 'motion/react'
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import background from '../assets/background.png'

import rocket from '../assets/rocket.svg'
import Lottie from 'lottie-react'
import athlete from '../assets/animations/athlete.json'


const Loader = () => {
    const [step, setStep] = useState(0)
    const navigate = useNavigate()

    const lottieRef = useRef()

    useEffect(() => {
        const anim = lottieRef.current
        if (anim) {
            anim.stop() // Ensures it's loaded and not playing
        }
    }, [])

    return (
        <div className='flex min-h-screen text-white' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
            <main className='flex-1 flex bg-aber-300 justify-center mt-22 items-start'>
                <div className="x8 py-2 relative mx-auto flex flex-col pr-24 w-12/12 pl-[25%]">

                    <Lottie className='absolute left-[00px] pl-[20%]' lottieRef={lottieRef} autoPlay={false} animationData={athlete} loop={false} style={{ backgrondColor: 'rgba(100,400,100,0.2)', width: '100%' }} />

                    <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1 }} transition={{ duration: 1, y: 0 }} onAnimationComplete={() => setStep(1)} className='text-2xl font-bold' >YINX.</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={step >= 1 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        onAnimationComplete={() => setStep(2)}
                    >
                        Portfolio site
                    </motion.p>

                    <div className="w-max pr-4 p8 relative">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={step >= 2 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.7 }}
                            onAnimationComplete={() => {
                                setStep(3)

                            }}
                        >
                            Loading...
                        </motion.p>
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={step >= 3 ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5 }}
                            src={rocket} alt=""
                            className='absolute right-0 '
                            onAnimationComplete={() => {
                                lottieRef.current?.play()

                                setTimeout(() => navigate('/home'), 2050)
                            }}
                        />
                    </div>
                </div>
            </main>
        </div >
    )
}

export default Loader