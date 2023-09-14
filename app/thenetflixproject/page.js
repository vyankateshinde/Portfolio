'use client'
import Navbar from '@/components/Navbar';
import React from 'react'
import Image from 'next/image';
import project2Img from '/public/assets/project2.png';
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link';

const page = () => {
  return (
    
    <div className='w-full'>
    <Navbar currentPath='/thenetflixproject'/>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/70 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover'  src={project2Img} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full right-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2'>
           <h2 className='text-white'>The Netflix Clone</h2>
           <h3 className='text-white'>REACT Js | Tailwind CSS</h3>
        </div>
      </div>
      
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-6 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2><br/>
          <p>"The Netflix Clone" project is a web application developed using React.js and Tailwind CSS, designed to replicate the popular streaming service Netflix. This project aims to provide users with a familiar and immersive streaming experience, showcasing a wide range of movies and TV shows. The Netflix Clone serves as both a showcase of web development skills and a tribute to the iconic Netflix platform.<br/>
          
          <span className='font-bold'>Key Features: </span><br/><br/>
          
          <span className='font-bold'>1. </span>User Authentication: Users can create accounts, sign in, and enjoy a personalized experience. Authentication is implemented securely to protect user data.<br/>
          
          <span className='font-bold'>2. </span>Home Page: The home page features a dynamic user interface that displays a curated selection of movies and TV shows, making it easy for users to discover content.<br/>
          
          <span className='font-bold'>3. </span>Browse Catalog: Users can browse an extensive catalog of movies and TV series, organized by genres, trending, and new releases. The interface is designed to be user-friendly, allowing for seamless exploration.<br/>
          
          <span className='font-bold'>4. </span>Video Streaming: The core feature of the Netflix Clone is the video streaming player, which supports high-quality streaming of content. Users can watch their favorite movies and shows without interruption.<br/>

          <span className='font-bold'>5. </span>Responsive Design: The application is built with a responsive design, ensuring a consistent and enjoyable viewing experience across various devices, including desktops, tablets, and mobile phones.
          </p>
          <button className='px-6 py-4 mt-4 '>Under development</button>
          
        </div>
        <div className='col span-4 ms:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
          <div className='p-2 lg:p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>      
            <div className='grid grid-cols-1 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/> React.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/> React Router
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
