import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = ({ currentPath }) => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  useEffect(() => {
    console.log(currentPath);
    if (currentPath === '/theofficeproject' || currentPath === '/thenetflixproject') {
      console.log('In IF block');
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      console.log('In ELSE block');
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  },);

  const setNavTrue = () => {
    setNav(!false);
  };

  const setNavFalse = () => {
    setNav(!true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={scroll ? 'transition ease-in-out delay-2000 w-full h-15 shadow-xl  z-[100]' : 'fixed w-full h-20 z-[100]'}
    >
      <div className="flex items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image className='pt-1' src="/assets/vslogo.png" alt="/" width="90" height="10" />
        </Link>
        <div className="ml-auto">
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex ">
            <Link href="/#center">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
          <div onClick={setNavTrue} className="md:hidden">
            <AiOutlineMenu size={25} style={{ color: `${linkColor}` }}/>
          </div>
        </div>
        <div className={nav ? 'md:hidden left-0 top-0 fixed w-full h-screen bg-black/70' : ''}></div>
        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] ease-in duration-500'
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image src="/assets/vslogo.png" alt="/" width="90" height="10" />
            <div
              onClick={setNavFalse}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">Let's build something legendary</p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contacts">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contacts
                </li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">Let's Connect </p>
              <div className="flex item-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
