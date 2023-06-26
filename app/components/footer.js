import React from 'react'

export const Footer = () => {
    return (
        <footer className="bg-slyellow">
            <div className="w-full mx-auto max-w-screen-xl p-3 flex-col items-center justify-center">
                <p className="text-base text-black text-center font-semibold p-3 sm:text-lg ">
                    © 2023 Make a Difference (Sri Lanka) Ltd.
                </p>
                <p className="text-xs text-black text-center font-normal p-3 sm:text-sm">
                    Make a Difference (Sri Lanka) Ltd. is a registered charity in England and Wales (1143573)
                </p>
            </div>
        </footer>
    )
}

export default Footer