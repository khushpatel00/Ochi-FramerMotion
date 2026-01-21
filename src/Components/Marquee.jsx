import React from 'react'

function Marquee() {
  return (
    <div>
        <div className="w-screen overflow-hidden rounded-2xl bg-[#004d43] py-10 flex">
            <div className='w-full border-t-white/30 h-1 border-t translate-y-18 duration-300'></div>
            <div className="text-[580px] uppercase text-nowrap leading-[480px] text-white font-[Founders_Grotesk_Condensed] font-bold">We are Ochi</div>
            <div className="text-[580px] uppercase text-nowrap leading-[480px] text-white font-[Founders_Grotesk_Condensed] font-bold">We are Ochi</div>
        </div>
    </div>
  )
}

export default Marquee