import React from 'react'
import Link from 'next/link'

const Hero2 = () => {
    return (
        <div className='w-full min-h-screen relative object-contain'>
            <img className='object-cover fixed w-full h-full opacity-75 -z-50' src='./carousel/2.jpg' />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col-reverse items-center drop-shadow-lg sm:justify-center'>
                <div className="p-6 bg-slgreen rounded-lg sm:w-1/2 lg:w-1/3">
                    <h5 className="mb-2 py-2 text-2xl font-bold tracking-tight text-nyanza text-center sm:text-4xl">Make A Difference Sri Lanka</h5>
                    <p className="mb-3 py-2 font-light text-teagreen text-sm text-center sm:text-base">Providing the young and vulnerable with sustainable opportunities for their futures.</p>
                    <div className='flex items-center justify-center'>
                        <Link href='https://www.gofundme.com/f/Vilippu-Koottu-Pannai-awakening-integrated-farm' className="px-3 py-2 text-sm font-medium text-slgreen bg-teagreen rounded-lg border-2 border-transparent sm:text-base hover:bg-slgreen hover:text-teagreen hover:border-teagreen hover:scale-110 transition duration-300 ease-in-out-quad">
                            DONATE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2