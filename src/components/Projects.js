import React from 'react'
let Logo = require('../images/let.png')
export const Projects = () => {
    return (
        <div name='projects' className='bg-slate-700 text-rose-50 p-5'>
            <div className="projects lg:mx-52 lg:mt-28 mb-5">
                <h1 className="font-semibold text-emerald-500 text-3xl py-2 sm:text-4xl">Projects</h1>
                <hr className='mb-5 bg-green-600 opacity-10'></hr>
                <h1 className='pt-3 sm:pt-6'><span className='font-semibold text-emerald-300 text-3xl sm:text-4xl'>  01.</span>
                    <span className='text-3xl text-gray-400 font-semibold tracking-wide ml-2 sm:ml-4 sm:text-4xl'>NIKHIL</span></h1>
                <div className="flex flex-col lg:flex-row mt-2 md:px-24 lg:px-20 sm:mt-4">
                    <div className=" flex justify-center  rounded-1xl lg:items-center  lg:w-1/2 ">
                        <div className="img rounded-1xl  bg-slate-700 border-2 border-emerald-400">
                            <img className="rounded-1xl lg:shadow-md lg:shadow-blue-200 " src={Logo} alt="" />
                        </div>
                    </div>
                    <div className="my-6 rounded-l bg-slate-800 lg:ml-4 md:flex md:justify-center lg:w-1/2 border-[1px] border-emerald-300">
                        <p className=" p-3 tracking-wide text-base  text-gray-500 lg:px-7 ">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum sequi recusandae minus
                            facilis
                            cupiditate porro odit reprehenderit, rerum aliquam maiores iusto quod animi vitae nisi amet,
                            error
                           
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
