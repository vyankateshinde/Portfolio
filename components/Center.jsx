import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Center = () => {
  return (
    <div id='center' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, <span className='text-[#5651e5]'>Vyankatesh</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href="https://www.linkedin.com/in/vyankateshinde/">
             <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
             </div>
            </Link>

            <Link href='https://github.com/vyankateshinde'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
               <FaGithub />
              </div>
            </Link>

            <Link href='mailto:vdshinde962@gmail.com'>
               <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
               </div>
            </Link>

            <Link href='tel:+918999783771'>
               <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill />
               </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Center;