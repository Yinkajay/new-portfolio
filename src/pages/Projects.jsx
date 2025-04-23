import { Link } from 'react-router-dom'
import { motion } from "motion/react"


const pageVariants = {
  initial: { opacity: 0, y: 0 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Projects = () => {

  const projects = [
    {
      title: "BLOODY CIVILIAN FANSITE",
      stack: ["React", "Javascript", "HTML & CSS", "Git"],
      livesite: "",
      repo: ""
    },
    {
      title: "LIVEPROJECT",
      stack: ["React", "Javascript", "HTML & CSS", "Git"],
      livesite: "",
      repo: ""
    },
    {
      title: "LIVEPROJECT",
      stack: ["React", "Javascript", "HTML & CSS", "Git"],
      livesite: "",
      repo: ""
    },
    {
      title: "LIVEPROJECT",
      stack: ["React", "Javascript", "HTML & CSS", "Git"],
      livesite: "",
      repo: ""
    }
  ];

  return (
    <motion.section variants={pageVariants} initial="initial" animate="animate" exit="exit" className='w-full'>
      <div className=" relative px-[25%] w-full">
        <div className="mb-8">
          <h1 className='text-3xl font-bold'>PROJECTs</h1>
          <p>Cool stuff i got to work on over the years</p>
        </div>

        {/* max-h-[50vh] overflow-y-auto */}
        <div className="mb-8 ">
          {projects.map((project, index) => (
            <>
              <div key={index} className="">
                <Link className='underline' to={project.livesite}>{project.title}</Link>
              </div>
              <div className='flex gap-2'>
                <p>Stack:</p>
                {project.stack.map((tool, index) => (
                  <p key={index}>{tool}</p>
                ))}
              </div>
            </>
          ))}
        </div>

        <Link className='underline'>LOOK AT MY CV</Link>
      </div>
    </motion.section>
  )
}

export default Projects