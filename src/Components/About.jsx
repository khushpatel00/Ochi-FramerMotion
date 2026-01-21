import { ArrowUpRightIcon } from '@phosphor-icons/react'
import React from 'react'

function About() {
    return (
        <div className='bg-[#CDEA68] rounded-2xl py-20 pe-30'>
            <p className='text-7xl text-zinc-800 py-20 px-16 neue'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</p>

            <div className='border-t border-black/30 px-16'>
                <p className='py-10  neue text-7xl text-zinc-800'>How we can help:</p>
                <button className='flex items-center gap-3 justify-between bg-zinc-800 text-zinc-200 uppercase text-lg neue rounded-full ps-7 pe-3 py-3'>
                    Read More
                    <p><ArrowUpRightIcon className='bg-white text-black w-16 h-16 rounded-full ms-10 p-5' /></p>
                </button>

            </div>

        </div>
    )
}

export default About