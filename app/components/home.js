import React from 'react'
import Link from 'next/link'

const RestOfHome = () => {
  return (
    <div className='flex flex-col items-center bg-celadon pb-10'>
      <div className='p-10 sm:w-2/3'>
        <h1 className='text-xl pb-5 font-bold underline underline-offset-8 text-center'>WHO WE ARE </h1>
        <div className='flex flex-col justify-center rounded-lg bg-nyanza drop-shadow-lg mt-3 lg:flex-row'>
          <img src='/carousel/3.jpg' className='rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg lg:w-1/2' />
          <div className='lg:w-1/2'>
            <p className="text-gray-900 p-3 text-justify lg:text-left">
              Make a Difference (Sri Lanka), also known as MDSL, has been a registered charity since
              it&apos;s inception in 2011 and has supported hundreds of beneficiaries by giving employment
              opportunities, building sustainable homes and supporting small businesses.
              <br></br>
              <br></br>
              Our ambition is to continue delivering impactful and long-term support for underprivileged people in
              the Northern and Eastern provinces of Sri Lanka.
            </p>
          </div>
        </div>
      </div>
      <Link href='/contact' className="px-3 py-2 text-sm font-medium text-nyanza bg-slgreen rounded-lg border-2 border-transparent sm:text-base hover:bg-nyanza hover:text-slgreen hover:border-slgreen hover:scale-110 transition duration-300 ease-in-out-quad">
        GET IN TOUCH
      </Link>
    </div>
  )
}

export default RestOfHome