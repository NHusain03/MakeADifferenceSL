import React from 'react'

function RestOfHome2() {
    return (
        <div className='py-5 bg-slgreen'>
            <h1 className='text-xl text-white pb-5 font-bold underline underline-offset-8 text-center'>OUR PROJECTS</h1>
            <div className='flex items-center justify-center space-x-10'>
                <div className='w-1/4 bg-white rounded-lg drop-shadow-lg'>
                    <img className='object-fill rounded-t-lg' src='./1.jpg'></img>
                    <p className='font-medium text-base text-center text-xl p-3'>Project A</p>
                </div>
                <div className='w-1/4 bg-white rounded-lg drop-shadow-lg'>
                    <img className='object-fill rounded-t-lg' src='./carousel/2.jpg'></img>
                    <p className='font-medium text-base text-center text-xl p-3'>Project B</p>
                </div>
                {/* <div className='w-1/4 bg-white rounded-lg drop-shadow-lg'>
                    <img className='object-contain rounded-t-lg' src='./carousel/hello.jpg'></img>
                    <p className='font-medium text-base text-center text-xl p-3'>Project C</p>
                </div> */}
            </div>
            <div className='flex justify-center mt-10'>
                <a href='#' className="text-decoration-none inline-flex items-center px-3 py-2 text-base text-lg font-medium text-center text-slgreen bg-white rounded-lg border-2 border-transparent hover:bg-slgreen hover:text-white hover:border-white transition-colors duration-300 ease-in-out-quad">
                    SEE MORE
                </a>
            </div>
        </div>
    )
}

export default RestOfHome2