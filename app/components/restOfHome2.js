import React from 'react'

function RestOfHome2() {
    return (
        <div className='p-10 bg-slgreen'>
            <h1 className='text-xl text-white pb-8 font-bold underline underline-offset-8 text-center'>PROJECTS</h1>
            <div className='flex flex-col items-center justify-center space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0'>
                <div className='bg-white rounded-lg drop-shadow-lg sm:w-1/2 lg:w-1/4 '>
                    <img className='object-fill rounded-t-lg' src='./1.jpg'></img>
                    <p className='font-medium text-base text-center text-xl p-3'>Vilippu Koottu Pannai</p>
                </div>
                <div className='bg-white rounded-lg drop-shadow-lg sm:w-1/2 lg:w-1/4 '>
                    <img className='object-fill rounded-t-lg' src='./carousel/2.jpg'></img>
                    <p className='font-medium text-base text-center text-xl p-3'>Education</p>
                </div>
            </div>
            <div className='flex justify-center pt-8'>
                <a href='/projects' className="text-decoration-none inline-flex items-center px-3 py-2 text-base text-lg font-medium text-center text-slgreen bg-white rounded-lg border-2 border-transparent hover:bg-slgreen hover:text-white hover:border-white transition-colors duration-300 ease-in-out-quad">
                    SEE MORE
                </a>
            </div>
        </div>
    )
}

export default RestOfHome2