import React from "react"

export default function Projects() {
    return (
        <>
            <img src="/background.jpg" className="fixed w-full h-full object-cover -z-50" />
            <div className="flex justify-center">
                <div className="bg-offwhite rounded-lg pb-5 px-5 my-16 w-4/5 sm:px-10 sm:pb-10">
                    <h1 className='text-xl py-5 font-bold underline underline-offset-8 text-center sm:py-7'>PROJECTS</h1>
                    <div className='flex flex-col justify-center items-center space-y-10'>

                        <div className="flex flex-col bg-gray-100 rounded-lg drop-shadow-lg lg:flex-row">
                            <img className="rounded-t-lg lg:w-3/5 lg:rounded-tr-none lg:rounded-bl-lg" src="/carousel/2.jpg" alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Vilippu Koottu Pannai (VKP)</h5>
                                <p className="mb-3 font-normal text-gray-700 text-sm sm:text-base">
                                    A mega project working in partnership with the Methodist Churches of Sri Lanka.
                                    Its purpose is to create employment opportunities for vulnerable people, aid qualified
                                    training and apprenticeship opportunities, and initiate integrated farming in Kilinochi.
                                    This will create sustainability, introducing techniques to ease the cost of farming.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse bg-gray-100 rounded-lg drop-shadow-lg lg:flex-row">
                            <div className="p-5">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Education</h5>
                                <p className="mb-3 font-normal text-gray-700 text-sm sm:text-base">
                                    An ongoing project aiming to financially support underprivileged students to receive tutoring
                                    and sit their University entrance exams. This project funds teacher salaries, administration
                                    costs and study supplies for all students. Additionally, we ensure that all students are given
                                    a full meal between lessons to ease all parents&apos; financial burden of needing to feed another
                                    mouth in the family.
                                </p>
                            </div>
                            <img className="rounded-t-lg lg:w-3/5 lg:rounded-tl-none lg:rounded-br-lg" src="/1.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}