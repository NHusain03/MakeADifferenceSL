import React from 'react'
import Link from 'next/link'

const Hero2 = () => {
    return (
        <div className='max-w-full min-h-screen relative'>
            <img className='object-contain w-full h-full opacity-75 ' src='./carousel/2.jpg' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center drop-shadow-lg'>
                <div className="w-1/3 p-6 bg-slgreen rounded-lg">
                    <h5 className="mb-2 py-2 text-4xl font-bold tracking-tight text-white">Make A Difference Sri Lanka</h5>
                    <p className="mb-3 py-2 font-light text-white">Providing the young and vulnerable with sustainable opportunities for their futures.</p>
                    <div className='flex items-center justify-center'>
                        <Link href='./projects' className="text-decoration-none inline-flex items-center px-3 py-2 text-base font-medium text-center text-slgreen bg-white rounded-lg border-2 border-transparent hover:bg-slgreen hover:text-white hover:border-white hover:scale-110 transition duration-100 ease-in-out-quad">
                            DONATE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2