import { ArrowUpRightIcon } from '@phosphor-icons/react'
import React from 'react'

function About() {
    return (
        <div className='bg-[#CDEA68] rounded-2xl flex justify-between items-center py-20 '>

            <div>
                <p className='text-7xl text-zinc-800 py-20 px-16 neue pe-30'>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</p>

                <div className='border-t flex justify-between py-10 border-black/30 px-16'>
                    <div>
                        <p className='py-10  neue text-7xl text-zinc-800'>How we can help:</p>
                        <button className='flex items-center gap-3 justify-between bg-zinc-800 text-zinc-200 uppercase text-lg neue rounded-full ps-7 pe-3 py-3'>
                            Read More
                            <p><ArrowUpRightIcon className='bg-white text-black w-16 h-16 rounded-full ms-10 p-5' /></p>
                        </button>
                    </div>
                    <img src="/images/Homepage-Photo-663x469.jpg" className='basis-1/2 rounded-2xl w-full h-auto ' alt="" />

                </div>
            </div>


        </div>
    )
}

export default About