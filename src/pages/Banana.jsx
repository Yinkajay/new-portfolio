import React, { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Loader = () => {
    const [step, setStep] = useState(1)
    return (
        <section className='bg-white w-full'>
            <div className="px-8 py-2 relative mx-auto bg-slate-800 w-1/2">
                <span className='text-2xl'>
                    <Typewriter words={['YINX.']} cursorStyle='_' loop={1} onLoopDone={() => setStep(prev => prev + 1)} />
                </span>
                <br />
                {step >= 2 && (
                    <span>
                        <Typewriter
                            words={['Portfolio site']}
                            loop={1}
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={0}
                            delaySpeed={500}
                            onLoopDone={() => setStep(prev => prev + 1)}
                        />
                    </span>
                )}
                <br />
                {step >= 3 && (
                    <span>
                        <Typewriter
                            words={['Loading...']}
                            // loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                )}
            </div>
        </section>
    )
}

export default Loader