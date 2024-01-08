import React from 'react'
import Link from 'next/link'

function RestOfHome2() {
    return (
        <div className='p-10 bg-slgreen'>
            <h1 className='text-xl text-nyanza pb-8 font-bold underline underline-offset-8 text-center'>PROJECTS</h1>
            <div className='flex flex-col items-center justify-center space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0'>
                <div className='bg-nyanza rounded-lg drop-shadow-lg sm:w-1/2 lg:w-1/4 '>
                    <img className='object-fill rounded-t-lg' src='./1.jpg'></img>
                    <p className='font-medium text-lg text-center p-3 text-slgreen sm:text-xl'>Vilippu Koottu Pannai</p>
                </div>
                <div className='bg-nyanza rounded-lg drop-shadow-lg sm:w-1/2 lg:w-1/4 '>
                    <img className='object-fill rounded-t-lg' src='./carousel/2.jpg'></img>
                    <p className='font-medium text-lg text-center text-base text-slgreen sm:text-xl p-3'>Education</p>
                </div>
                <div className='bg-nyanza rounded-lg drop-shadow-lg sm:w-1/2 lg:w-1/4 '>
                    <img className='object-fill rounded-t-lg' src='./1.jpg'></img>
                    <p className='font-medium text-lg text-center p-3 text-slgreen sm:text-xl'>Skills</p>
                </div>
            </div>
            <div className='flex justify-center pt-8'>
                <Link href='/projects' className="px-3 py-2 text-sm font-medium text-slgreen bg-nyanza rounded-lg border-2 border-transparent sm:text-base hover:bg-slgreen hover:text-white hover:border-white hover:scale-110 transition duration-300 ease-in-out-quad">
                    SEE MORE
                </Link>
            </div>
        </div>
    )
}

export default RestOfHome2