import React from 'react'
let Logo = require("../images/nikhil.jpg")
export const About = () => {
    return (
        <div name='about' className='mid bg-slate-700 text-rose-50 p-5'>
            <div className="about lg:mx-52">
                <h1 className="font-semibold text-emerald-500 text-3xl pt-3 ">About Me</h1>
                <hr className='mb-5 bg-green-600 opacity-10'></hr>
                <div className="flex flex-col lg:flex-row mt-2">
                    <div
                        className=" flex justify-center shadow-xl shadow-emerald-300 rounded-2xl lg:items-center lg:shadow-none ">
                        <div className="img rounded-2xl md:p-3 bg-slate-700 lg:shadow-2xl lg:shadow-emerald-300">
                            <img src={Logo} className="rounded-2xl w-96 h-[450px] md:h-[500px] lg:h-[420px]" alt="" />
                        </div>
                    </div>
                    <div className="my-4 rounded-l bg-slate-800 md:w-9/12 lg:ml-4  md:ml-5">
                        <p className="ski tracking-wide text-base  p-3 text-gray-500 lg:px-7">
                            Hello! My name is <span className='text-emerald-300'>Nikhil</span> and I am Computer Science graduate from NIT Silchar. I enjoy exploring and creating new things that live on the Internet. My interest in web development started back in 2022 when I decided to take hand in development field and seeing attractive website makes me more enthusiastic for web-development. Here are few technologies I’ve been working with recently:
                        </p>

                        <div className="tracking-wide text-base ml-8 mt-1 flex pb-3 text-zinc-400 lg:px-7">
                            <ul className='list-disc'>
                                <li>
                                    C<span className='text-emerald-300'> & </span>C++
                                </li>
                                <li>
                                    Tailwind CSS
                                </li>
                                <li>
                                    OOPs
                                </li>
                                <li>
                                    JavaScript
                                </li>
                            </ul>
                            <ul className='list-disc mx-12'>
                                <li>
                                    Java
                                </li>
                                <li>
                                    React JS
                                </li>
                                <li>
                                    DSA
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
