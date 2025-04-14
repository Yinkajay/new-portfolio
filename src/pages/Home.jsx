import Lottie from 'lottie-react'
import swing from '../assets/animations/swing.json'
import runna from '../assets/animations/runna.json'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section>
            <div className="px-8">
                <Lottie className='absolute right-0' animationData={runna} style={{ height: 300, width: 1400, backgroundColor: '' }}
                />
                <div className="mb-8">
                    <h1 className='text-3xl font-bold'>YINX.</h1>
                    <p>Frontend Engineer who loves building cool stuff.</p>
                </div>

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
        </section>
    )
}

export default Home 