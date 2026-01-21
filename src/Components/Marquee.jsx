import React from 'react'
import TextPressure from './TextPressure';


function Marquee() {
  return (
    <div>
      <div className="w-screen rounded-2xl bg-[#004d43] min-h-[60vh] max-h-[70vh] py-10">
        <div className='w-full border-t-white/30 h-1 border-t translate-y-12 duration-300'></div>
        {/* <div className="text-[580px] uppercase text-nowrap leading-120 text-white font-[Founders_Grotesk_Condensed] font-bold">We are Ochi</div>
        <div className="text-[580px] uppercase text-nowrap leading-120 text-white font-[Founders_Grotesk_Condensed] font-bold">We are Ochi</div> */}

        <div className='' style={{ position: 'relative', height: '300px' }}>
          <TextPressure
            text="Weare Ochi"
            flex
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>

      </div>
    </div>
  )
}

export default Marquee