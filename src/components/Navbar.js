import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faContactCard } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import {  faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {Link} from "react-scroll";

// TO ADD IMAGES
let Logo = require("../images/nikhil.jpg")
const Navbar = () => {
    const [nav, Stnav] = useState(false);
    const togle = () => Stnav(!nav);
    return (
        < >

            <div className=' bg-slate-800 p-3 text-orange-50  w-full fixed top-0 z-50'>
                <header className="head flex flex-wrap justify-between items-center">
                    <Link to='home' smooth={true} duration={500}>
                    <div className="logo_bar flex items-center ">
                            <div className="logo rounded-full shadow-lg shadow-slate-500 cursor-pointer">
                                <img src={Logo} className="w-14 h-14 rounded-full" alt="#" />
                            </div>
                            <h1 className="font-mono font-semibold ml-2 text-emerald-500 ">Nikhil Vinay</h1>
                        </div>
                                </Link>
                    {/* <!-- https://ionic.io/ionicons/usage --> */}
                    {/* <button className="menu md:hidden text-3xl cursor-pointer mx-2 hover:bg-slate-400 items-center flex rounded-lg">
            <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </button> */}
                    <button onClick={togle} className="menu md:hidden text-3xl cursor-pointer mx-2 items-center flex rounded-2xl  p-2 ">
                        <FontAwesomeIcon icon={!nav ? faBars : faXmark} className="" />
                        {/* <FontAwesomeIcon icon={faMailForward}/> */}
                    </button>


                    <div className="navbar hidden w-full mt-2 md:block md:w-auto md:mt-0">
                        <ul className=" flex flex-col  space-y-2 md:flex-row md:px-6 md:py-4 md:space-x-4 md:space-y-0">
                            <li className="cursor-pointer px-2 hover:text-slate-300">
                                <Link to='home' smooth={true} duration={500}>
                                   Home
                                </Link>
                            </li>
                            
                            <li className="cursor-pointer px-2 hover:text-slate-300">
                                {/* <a href="/about">About</a> */}
                                <Link to='about' smooth={true} duration={500}>
                                    About
                                </Link>
                            </li>
                            <li className="cursor-pointer px-2 hover:text-slate-300">
                            <Link to='projects' smooth={true} duration={500}>
                                    Projects
                                </Link>
                            </li>
                            <li className="cursor-pointer px-2 hover:text-slate-300">
                            <Link to='contact' smooth={true} duration={500}>
                                    Contact
                                </Link>
                            </li>
                            <li className="cursor-pointer px-2  text-red-500">
                                <a href="/">Resume</a>
                            </li>
                        </ul>
                    </div>
                </header>


                <div className={!nav ? 'hidden' : 'nv w-full mt-5 md:hidden'}>
                    <ul className=" flex flex-col  space-y-3 ">
                        <li className="cursor-pointer px-2 hover:text-slate-300">
                        <Link to='home'  smooth={true} duration={500} onClick={togle}>
                                   Home
                                </Link>
                        </li>
                        <li className="cursor-pointer px-2 hover:text-slate-300">
                        <Link to='about' onClick={togle} smooth={true} duration={500}>
                                    About
                                </Link>
                        </li>
                        <li className="cursor-pointer px-2 hover:text-slate-300">
                        <Link to='projects' onClick={togle} smooth={true} duration={500}>
                                    Projects
                                </Link>
                        </li>
                        <li className="cursor-pointer px-2 hover:text-slate-300">
                        <Link to='contact' onClick={togle} smooth={true} duration={500}>
                                    Contact
                                </Link>
                        </li>
                        <li className="cursor-pointer px-2  text-red-500">
                            <a href="/">Resume</a>
                        </li>
                    </ul>
                </div>

            </div>
               {/* Social app  */}
               <div className="social hidden  bg-slate-700 text-rose-50 lg:flex fixed top-[38%] -left-2">
                <ul className='flex flex-col' >
                    <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a href="https://www.linkedin.com/in/nikhil-vinay-67580a221/" className='flex justify-evenly items-center '>
                            <span className='text-lg text-zinc-200'>LinkedIn</span>
                            <span className='text-blue-600 text-3xl'><FontAwesomeIcon icon={faLinkedin} /></span>

                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a href="https://github.com/0024nv" className='flex justify-evenly items-center '>
                            <span className='text-lg text-zinc-200'>GitHub</span>
                            <span className='text-gray-400 text-3xl pl-4'><FontAwesomeIcon icon={faGithub} /></span>

                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px]  duration-300'>
                        <a href="mailto:nikhilvinay24@gmail.com" className='flex justify-evenly items-center  '>
                            <span className='text-lg text-zinc-200'>Email</span>
                            <span className='text-red-500 text-3xl pl-8'><FontAwesomeIcon icon={faEnvelope} /></span>

                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a href="#facebook" className='flex justify-evenly items-center '>
                            <span className='text-lg text-zinc-200 pl-2'>Resume</span>
                            <span className='text-gray-400 text-3xl pl-3 '><FontAwesomeIcon icon={faContactCard} /></span>

                        </a>
                    </li>
                </ul>
            </div>
            {/* MY NAME IS  */}
            <div  name='home' className='bg-slate-700 text-rose-50 pt-[80px]'>
                <div  className="intro  p-3 md:pl-6 md:pt-6 lg:pl-52 lg:pt-44">
                    <p className="text-emerald-500 font-medium">
                        H! My name is
                    </p>
                    <h1 className="text-5xl px-2 pt-2 text-gray-400 font-semibold md:text-7xl lg:text-8xl tracking-wider">Nikhil Vinay
                    </h1>
                    <p className="px-2 pt-3 font-medium tracking-widest text-gray-400 md:text-5xl lg:text-6xl md:tracking-wide typing ">I build
                        things for the web</p>
                    <p
                        className="px-2 py-3 font-medium text-gray-500 md:py-8 md:pl-6 lg:py-10 lg:px-5 lg:text-lg lg:w-5/6 lg:pb-32">
                        I'm a computer science and engineering student specializing in building (and occasionally designing)
                        exceptional digital experiences. Currently, I'm focused on my B.Tech at NIT Silchar and looking for
                        opportunities for SDE role.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Navbar