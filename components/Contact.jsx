import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
{/*left*/}          
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full' >
                    <div>
                        <img className='rounded-xl hover:scale-105 ease-in duration-300 lg:py-1' src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80" alt="" ></img>
                    </div> 
                    <div>
                        <h2 className='py-2'>Vyankatesh Shinde</h2>
                        <p>Front-End Developer</p>
                        <p className='py-4'>I am available for freelance or full-time positions. Contact me and let's talk.</p>
                    </div>
                    <div>
                    <p className='uppercase pt-8'>Connect With Me</p>
                    <div className='flex items-center justify-between py-4'>
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
           
    {/*right*/}       
    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
        <div className='p-4'>
            <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>               
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone Number</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='number'/>               
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email'/>               
                </div>
                <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'/>               
                </div>
                <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>Message</label>
                        <textarea className='border-2 rounded-lg p-3 flex border-gray-300' type='text' rows='10'> </textarea>               
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>     
            </form>
        </div>
    </div>
</div>

    <div className='flex justify-center py-12'>
        <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in suration-300'>
             <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
            </div>
        </Link>    
    </div>
        </div>
    </div>    
  )
}

export default Contact;