import React from 'react'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faGithub,faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <div name='contact' className='contact bg-slate-700 text-rose-50 p-5'>
        <div className='lg:mx-52 lg:mt-28 mb-5 '>
        <h1 className="font-semibold text-emerald-300 text-3xl sm:text-5xl py-3 text-center md:tracking-wide">Get In Touch</h1>
        <div className='flex justify-center space-x-4 my-4 text-emerald-500 text-2xl sm:text-3xl'>
           
            <span className=' hover:text-emerald-700'><a href="https://www.facebook.com/nik145nv/" ><FontAwesomeIcon icon={faFacebook} /></a></span>
            <span className=' hover:text-emerald-700'><a href="https://github.com/0024nv"><FontAwesomeIcon icon={faGithub}/></a></span>
            <span className=' hover:text-emerald-700'><a href="https://www.instagram.com/nik145nv/" ><FontAwesomeIcon icon={faInstagram}/></a></span>
            <span className=' hover:text-emerald-700'><a href="https://www.linkedin.com/in/nikhil-vinay-67580a221/" ><FontAwesomeIcon  icon={faLinkedinIn}/></a></span>
            <span className=' hover:text-emerald-700'><a href="mailto:nikhilvinay24@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></span>
            
        </div>
        </div>
    </div>
  )
}
