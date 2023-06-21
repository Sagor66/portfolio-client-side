import { useEffect, useState } from 'react';
import wave1 from '../../../assets/wave/wave1.png'
import wave2 from '../../../assets/wave/wave2.png'
import Projects from './Projects';
import './featured.css'

const FeaturedProjects = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('../../../../public/data.json')
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [])

  console.log(projects)

  return (
    <div className="bg-blue-500 h-fit relative bg-featured pb-40 mb-32">
      <img className='absolute top-0' src={wave1} alt="" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold tracking-wider text-white text-center px-4 py-2 w-fit mx-auto pt-32 mb-16">
          Featu<span className='border-b-4 rounded pb-2'>red Pro</span>jects
        </h2>
        <div>
          {
            projects.map((project, i) => (
              <Projects key={i} project={project}></Projects>
            ))
          }
        </div>
      </div>
      <img className='absolute bottom-0' src={wave2} alt="" />
    </div>
  );
};

export default FeaturedProjects;
