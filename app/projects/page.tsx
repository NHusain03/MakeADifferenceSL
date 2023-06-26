// import RestOfHome2 from '../components/restOfHome2'
import React from "react"
// import { items } from "Items.json";

export default function Projects() {
    return (
        <div className="bg-offwhite p-10">
            <h1 className='text-xl pb-10 font-bold underline underline-offset-8 text-center'>PROJECTS</h1>
            <div className='flex flex-col justify-center space-y-10 md:flex-row md:space-y-0 md:space-x-10'>

                <div className="max-w-sm bg-gray-100 rounded-lg drop-shadow-lg">
                    <img className="rounded-t-lg" src="/carousel/2.jpg" alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Vilippu Koottu Pannai (VKP)</h5>
                        <p className="mb-3 font-normal text-gray-700">
                            A mega project working in partnership with the Methodist Churches of Sri Lanka.
                            Its purpose is to create employment opportunities for vulnerable people, aid qualified
                            training and apprenticeship opportunities, and initiate integrated farming in Kilinochi.
                            This will create sustainability, introducing techniques to ease the cost of farming.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm bg-gray-100 rounded-lg drop-shadow-lg">
                    <img className="rounded-t-lg" src="/1.jpg" alt="" />
                    <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Education</h5>
                        <p className="mb-3 font-normal text-gray-700">
                            An ongoing project aiming to financially support underprivileged students to receive tutoring
                            and sit their University entrance exams. This project funds teacher salaries, administration
                            costs and study supplies for all students. Additionally, we ensure that all students are given
                            a full meal between lessons to ease all parents&apos; financial burden of needing to feed another
                            mouth in the family.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

// <div className="flex">
//                 <div className="bg-white rounded-lg drop-shadow-lg w-1/2 m-10 ml-20 my-30 p-5">
//                     <div className="flex justify-center">
//                         <a className="bg-slgreen p-2 text-white text-lg font-semibold rounded-lg mb-3">
//                             Vilippu Koottu Pannai (VKP)
//                         </a>
//                     </div>
//                     <p>
//                         A mega project working in partnership with the Methodist Churches of Sri Lanka.
//                         Its purpose is to create employment opportunities for vulnerable people, aid qualified
//                         training and apprenticeship opportunities, and initiate integrated farming in Kilinochi.
//                         This will create sustainability, introducing techniques to ease the cost of farming.
//                     </p>
//                 </div>
//                 <img src="carousel/3.jpg" className="w-1/3 rounded-lg m-10 my-20" alt="" />


//             </div>
//             <div className="flex">
//                 <img src="carousel/3.jpg" className="w-1/3 rounded-lg m-10 my-20 ml-20" alt="" />
//                 <div className="bg-white rounded-lg drop-shadow-lg w-1/2 m-10  p-5">
//                     <div className="flex justify-center">
//                         <a className="bg-slgreen p-2 text-white text-lg font-semibold rounded-lg mb-3">
//                             Education
//                         </a>
//                     </div>
//                     <p>
//                         An ongoing project aiming to financially support underprivileged students to receive tutoring
//                         and sit their University entrance exams. This project funds teacher salaries, administration
//                         costs and study supplies for all students. Additionally, we ensure that all students are given
//                         a full meal between lessons to ease all parents&apos; financial burden of needing to feed another
//                         mouth in the family.
//                     </p>
//                 </div>
//             </div>