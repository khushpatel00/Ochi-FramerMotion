import React from 'react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { motion } from 'motion/react'

function Landing() {
    return (
        <>
            <div className='px-20 relative h-screen flex flex-col justify-center gap-0 overflow-x-hidden duration-300 -translate-y-1/8'>
                {['We create', 'eye-opening', 'presentations'].map((item, index) => {
                    return (
                        <div className='flex items-center last:pt-3' key={index}>
                            {index == 1 ? <motion.div initial={{width: 0,}} drag dragConstraints={{top: 0 , bottom: 0 , left: 0 , right: 0 }} whileDrag={{scale: 0.8}} animate={{width: 'initial'}} transition={{ease: 'anticipate', duration: 1, delay: 0.5}} className='overflow-x-hidden translate-y-[7%] rounded-xl'><motion.img initial={{marginRight: 30}} animate={{marginRight: 15}} transition={{duration: 0.1, delay: 1.3, ease: 'easeInOut'}} src="/images/landingDivider.jpg" className='rounded-xl min-w-50 h-30 duration-300 pointer-events-none' alt="" /></motion.div> : ''}
                            <p key={index} className='font-semibold leading-33 text-zinc-800 text-[180px] font-[Founders_Grotesk_Condensed] uppercase'>{item}</p>
                        </div>
                    )
                })}

                <div className='absolute flex justify-between bottom-0 left-0 px-10 text-xl neue w-full border-t border-zinc-400 py-10  '>
                    <p>Presentation and storytelling agency</p>
                    <p>For innovation teams and global brands</p>

                    <div className='flex items-center justify-center gap-2'><p className='uppercase border px-3 py-1 rounded-full font-normal tracking-wide cursor-pointer hover:bg-zinc-800 hover:text-white duration-300 hover:border-zinc-800 text-black'>Start The Project </p> <ArrowUpRightIcon size={32} className='border rounded-full p-1 hover:bg-zinc-800 hover:border-zinc-800 hover:text-white duration-300'/></div> 
                </div>
            </div>
        </>
    )
}

export default Landing