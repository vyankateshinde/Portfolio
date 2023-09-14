'use client'
import Navbar from '@/components/Navbar';
import React from 'react'
import Image from 'next/image';
import projectImg from '/public/assets/project.png';
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link';

const page = () => {
  return (
    
    <div className='w-full'>
    <Navbar currentPath='/theofficeproject'/>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/70 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover'  src={projectImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full right-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
           <h2 className='text-white'>Stream The Offfice</h2>
           <h3 className='text-white'>HTML | CSS | Js | Bootstrap</h3>
        </div>
      </div>
      
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-6 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2><br/>
          <p>"Stream The Office" is a web application developed using HTML, CSS, JavaScript, and Bootstrap that aims to provide fans of the popular TV series "The Office" with a seamless and enjoyable streaming experience. This project was conceived as a tribute to the show and an opportunity to showcase web development skills by creating a user-friendly platform for fans to relive their favorite moments from the series.<br/>
          
          <span className='font-bold'>Key Features: </span><br/>
          
          <span className='font-bold'>1) </span>Episode Catalog: The application offers an extensive catalog of "The Office" episodes, neatly organized by season. Users can easily browse and select their preferred season and episode for streaming.<br/>
          
          <span className='font-bold'>2) </span>User-Friendly Interface: The user interface is designed with simplicity in mind. It is intuitive and easy to navigate, ensuring that even first-time visitors can quickly find their way around the site.<br/>
          
          <span className='font-bold'>3) </span>Responsive Design: "Stream The Office" is responsive, making it accessible on various devices, including desktops, tablets, and mobile phones. The responsive design ensures a consistent and enjoyable viewing experience.
          </p>

          <a href='https://theoffice.vdsshinde20.repl.co' target='_blank' >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a href='https://replit.com/@vdsshinde20/TheOffice' target='_blank' >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
          
        </div>
        <div className='col span-4 ms:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
          <div className='p-0 lg:p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>      
            <div className='grid grid-cols-2 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/> Bootstrap
              </p>
              
            </div>    
          </div>
        </div>
        

      </div>
      <Link href='/#projects'>
          <p className='underline cursor-pointer p-4'>Back</p>
        </Link>

    </div>
  )
}

export default page;
