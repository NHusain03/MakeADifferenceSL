import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-slyellow">
            <div className="w-full mx-auto max-w-screen-xl p-3 flex-col items-center justify-center">
                <div className="text-lg text-black sm:text-center font-semibold p-3">
                    © 2023 Make A Difference Sri Lanka
                </div>
                <div className="text-sm text-black sm:text-center font-normal p-3">
                    Make A Difference Sri Lanka is a registered charity in England and Wales (1234567)
                </div>
            </div>
        </footer>
    )
}

export default Footer