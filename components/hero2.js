import React from 'react'

const Hero2 = () => {
    return (
        <div className='max-w-full min-h-screen relative'>
            <img className='object-contain w-full h-full opacity-80 ' src='./1.jpg' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center drop-shadow-lg'>
                <div className="w-1/3 p-6 bg-slred rounded-lg">
                    <a href="#">
                        <h5 className="mb-2 py-2 text-4xl font-bold tracking-tight text-white">Make A Difference Sri Lanka</h5>
                    </a>
                    <p className="mb-3 py-2 font-light text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <div className='flex items-center justify-center'>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-base font-medium text-center text-slred bg-slyellow rounded-lg border-2 border-transparent hover:bg-slred hover:text-slyellow hover:border-slyellow transition-colors duration-300 ease-in-out-quad">
                            DONATE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2