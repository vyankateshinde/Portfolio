import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
            <h2 className='text-4xl py-2 text-grey-600'>Who I Am</h2>
            <p className='py-2'>Enthusiastic fresher with a creative thinking and innovative approaches. Recent computer engineering
            graduate passionate about coding and web development, with a strong foundation in HTML, CSS, JavaScript, and Bootstrap. Eager to contribute to a dynamic team while enhancing skills in React.js and
            pursuing opportunities for professional growth.
            </p>
            <p className='py-2 text-grey-600 underline cursor-pointer'>check out some of my latest projects.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center p-4 hover:scale-105 ease-in duration-300 '>
            <img className='rounded-xl' src="/assets/about.jpg" alt="/"></img>
        </div>
      </div>
    </div>
  )
}

export default About;
