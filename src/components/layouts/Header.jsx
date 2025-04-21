"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react'
import Logo from '@/../public/img/undar.png'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Github, Google, Instagram, Linkedin, Moon, Search, Sun, Whatsapp, X } from 'react-bootstrap-icons'
import Swal from 'sweetalert2'
const ThemeTogglerNav = dynamic( () => {
  return import( '../partials/button/ThemeTogglerNav' );
}, { ssr: false } );
const ThemeTogglerHeader = dynamic( () => {
  return import( '../partials/button/ThemeTogglerHeader' );
}, { ssr: false } );

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToast = () => {
      return Swal.fire({
        title: "",
        text: "Mohon maaf, fitr ini masih dalam tahap pengembangan",
        icon: "warning"
      });
  }

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('overflow-hidden')
      document.getElementById('navbar-open').classList.remove('hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
      document.getElementById('navbar-open').classList.add('hidden')
    }
  }, [navOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={`${isScrolled && 'border-b bg-white bg-opacity-60 backdrop-blur-md dark:bg-slate-900 dark:bg-opacity-60 dark:border-b-slate-700'} flex fixed z-40 inset-x-0 top-0 p-4 lg:px-8`}>
        <Link href=''>
          <Image src={Logo} loading='lazy' quality={50} alt='' className='h-9 w-9 lg:h-11 lg:w-11'/>
        </Link>
        <button type='button' onClick={() => setNavOpen(!navOpen)} className='flex items-center gap-2 ml-5 bg-indigo-50 text-emerald-400 bg-opacity-70 text-xs px-3 py-1 rounded-full group hover:bg-indigo-100 lg:px-5 dark:bg-slate-800 dark:bg-opacity-70'>
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><rect height="6" rx="1" width="6" x="4" y="4"/><rect height="6" rx="1" width="6" x="14" y="4"/><rect height="6" rx="1" width="6" x="4" y="14"/><rect height="6" rx="1" width="6" x="14" y="14"/></svg>
            Quick Center
            <ChevronRight size={10} className="group-hover:ml-2 group-hover:duration-300"/>
        </button>
        <div className="ml-auto flex items-center gap-8">
          <ul className='hidden md:flex md:items-center md:gap-10 md:text-xs dark:text-slate-100'>
            <li>
              <Link href='/' className='hover:text-emerald-400'>
                Home
              </Link>
            </li>
            <li>
              <Link href='' className='hover:text-emerald-400'>
                Project
              </Link>
            </li>
            <li>
              <Link href='/blog' className='hover:text-emerald-400'>
                Blog
              </Link>
            </li>
            <li>
              <Link href='' className='hover:text-emerald-400'>
                Forum
              </Link>
            </li>
          </ul>
          <hr className='hidden lg:h-full lg:border lg:block'/>
          <button type='button' onClick={handleToast} className='text-gray-700 dark:text-slate-100'>
            <Search size={18}/>
          </button>
          <ThemeTogglerHeader/>
          <a href='https://github.com/danangstdi' target='_blank' className='hidden py-3 px-5 text-white bg-gradient-to-r from-slate-600 to-slate-800 rounded-full text-xs group lg:flex lg:items-center lg:gap-2 dark:text-slate-100'>
                <Github size={16}/>
                Github
                <ArrowRight size={16} className='opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 group-hover:duration-300 group-hover:ease-in-out'/>
          </a>
        </div>
      </nav>

      <div id='navbar-open' className='hidden'>
        <div className='fixed z-40 overflow-y-scroll inset-0 bg-slate-300 bg-opacity-40 backdrop-blur-sm p-6 dark:bg-slate-800 dark:bg-opacity-40'>
          <section className='flex justify-between text-gray-700 dark:text-slate-100'>
            <div className='flex flex-col items-center nav-list-item-1'>
              <p className='text-3xl lg:text-5xl'>12.22</p>
              <p className='text-xs lg:text-lg'>Min, 16 Feb</p>
            </div>
            <button type='button' onClick={() => setNavOpen(!navOpen)} className='nav-list-item-1 bg-slate-100 bg-opacity-50 backdrop-blur-sm h-fit p-1 ml-auto rounded-md hover:bg-slate-300 dark:bg-slate-600 dark:bg-opacity-50 dark:hover:bg-slate-500'>
              <X size={25} className='text-gray-700 dark:text-slate-100'/>
            </button>
          </section>

          <section className='mt-10'>
            <h5 className='font-semibold nav-list-item-2 dark:text-slate-100'>Action</h5>
            <div className='grid grid-cols-2 gap-3 mt-4 nav-list-item-3 md:grid-cols-4 lg:grid-cols-6'>
              <ThemeTogglerNav/>
            </div>
          </section>

          <section className='mt-10'>
            <h5 className='font-semibold nav-list-item-4 dark:text-slate-100'>Socials</h5>
            <div className='grid grid-cols-2 gap-3 mt-4 nav-list-item-5 md:grid-cols-4 lg:grid-cols-6'>
              <a href='https://github.com/danangstdi' target='_blank' className='bg-slate-50 text-gray-700 bg-opacity-60 rounded-lg shadow-sm flex flex-col justify-between w-full h-32 p-5 hover:border hover:border-cyan-400 hover:duration-200 hover:text-cyan-400 dark:text-slate-100 dark:bg-slate-700 dark:bg-opacity-60 hover:dark:text-cyan-400'>
                <Github size={20}/>
                <p className='text-sm'>Github</p>
              </a>
              <a href="mailto:danangsetiadi2003@gmail.com" target='_blank' className='bg-slate-50 text-gray-700 bg-opacity-60 rounded-lg shadow-sm flex flex-col justify-between w-full h-32 p-5 hover:border hover:border-cyan-400 hover:duration-200 hover:text-cyan-400 dark:text-slate-100 dark:bg-slate-700 dark:bg-opacity-60 hover:dark:text-cyan-400'>
                <Google size={20}/>
                <p className='text-sm'>Email</p>
              </a>
              <a href="https://www.linkedin.com/in/danang-setiadi-75a176262/" target='_blank' className='bg-slate-50 text-gray-700 bg-opacity-60 rounded-lg shadow-sm flex flex-col justify-between w-full h-32 p-5 hover:border hover:border-cyan-400 hover:duration-200 hover:text-cyan-400 dark:text-slate-100 dark:bg-slate-700 dark:bg-opacity-60 hover:dark:text-cyan-400'>
                <Linkedin size={20}/>
                <p className='text-sm'>Linkedin</p>
              </a>
              <a href="https://www.instagram.com/danangstd_/" target='_blank' className='bg-slate-50 text-gray-700 bg-opacity-60 rounded-lg shadow-sm flex flex-col justify-between w-full h-32 p-5 hover:border hover:border-cyan-400 hover:duration-200 hover:text-cyan-400 dark:text-slate-100 dark:bg-slate-700 dark:bg-opacity-60 hover:dark:text-cyan-400'>
                <Instagram size={20}/>
                <p className='text-sm'>Instagram</p>
              </a>
              <a href="https://wa.me/6285335837454" target='_blank' rel="noopener noreferrer" className='bg-slate-50 text-gray-700 bg-opacity-60 rounded-lg shadow-sm flex flex-col justify-between w-full h-32 p-5 hover:border hover:border-cyan-400 hover:duration-200 hover:text-cyan-400 dark:text-slate-100 dark:bg-slate-700 dark:bg-opacity-60 hover:dark:text-cyan-400'>
                <Whatsapp size={20}/>
                <p className='text-sm'>Whatsapp</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </header>
  )
}
