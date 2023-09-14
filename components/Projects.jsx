import Image from 'next/image'
import React from 'react'
import projectImg from '../public/assets/project.png';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
import project2Img from '../public/assets/project2.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem title='Stream The Office' backgroundImg={projectImg} languages='HTML, CSS, Js, Bootstrap Project' projectUrl='/theofficeproject' button='Visit Project'/>
            <ProjectItem title='Netflix Clone' backgroundImg={project2Img} languages='React, Tailwind CSS Porject' projectUrl='/thenetflixproject' button='Visit Project'/>

            </div>
        </div>
    </div>
  )
}

export default Projects;