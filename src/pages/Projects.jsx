import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import Lottie from 'lottie-react';
import athlete3 from '../assets/animations/athlete3.json'
import { useEffect, useRef } from 'react';


const pageVariants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Projects = () => {
  const lottieRef = useRef()

  useEffect(() => {
    if (lottieRef.current) lottieRef.current.goToAndStop(athlete3.op - 1, true)

  }, [])


  const projects = [
    {
      title: "BLOODY CIVILIAN FANSITE",
      stack: ["React", "Framer motion", "Javascript", "HTML & CSS", "Git"],
      livesite: "https://bloooooddyyyyy.netlify.app/",
      repo: "https://github.com/Yinkajay/bloody-civ"
    },
    {
      title: "Task Manager",
      stack: ["React", "Typescript", "HTML & CSS", "Git"],
      livesite: "https://schoolinkatask.netlify.app/",
      repo: "https://github.com/Yinkajay/Activity-Planner"
    },
    {
      title: "Creative Studio Wesbite",
      stack: ["React", "Javascript", "HTML & CSS", "Git"],
      livesite: "https://mcmstudio.markcalthers.com/services",
      repo: ""
    },
    {
      title: "Vue Store",
      stack: ["Vue", "Javascript", "HTML & CSS", "Git"],
      livesite: "https://shoppa-app-vue3.web.app/login",
      repo: "https://github.com/Yinkajay/Product-Auth"
    },
    {
      title: "Call Center Agency",
      stack: ["React", "Javascript", "HTML & CSS", "Git"],
      livesite: "https://shoppa-app-vue3.web.app/login",
      repo: ""
    }
  ];

  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className='w-full'>
      <div className=" relative mx-auto px-[22%] md:px-[25%] w-full">
        <div className="mb-12">
          <h1 className='text-3xl lg:text-4xl leading-none font-bold mb-4'>PROJECTs</h1>
          <p className='text-xl'>Cool stuff i got to work on over the years</p>
          <Lottie lottieRef={lottieRef}
            className='absolute pt-1 left-0 top-0 right-0 pointer-events-none'
            animationData={athlete3}
            loop={false}
            autoplay={false}
            style={{ ackgroundColor: 'rgba(100,400,100,0.3)' }} />
        </div>
        <div className="mb-8 ">
          {projects.map((project, index) => (
            <div key={index} className='mb-6'>
              <div key={index} className="mb-2">
                <Link className='underline text-xl mr-3 uppercase' to={project.livesite}>{project.title}</Link>
                {project.repo !== '' && <Link className='underline' to={project.repo}>repository</Link>}
              </div>
              <div className='flex flex-wrap bg-amer-400 items-center gap-2 -ml-[10%] md:-ml-[14%]'>
                <p>Stack:</p>
                {project.stack.map((tool, index) => (
                  <p key={index} className=' max-mobile:text-sm mr-2 md:mr-3'>{tool}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className=''>Want to chat about a project or job opportunity? Just drop me a line at yinkajunaid@ymail.com</p>
      </div>
    </motion.section>
  )
}

export default Projects