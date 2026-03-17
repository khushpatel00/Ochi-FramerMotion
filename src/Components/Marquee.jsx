import React from 'react'
import TextPressure from './TextPressure';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Lenis from 'lenis'
import LocomotiveScroll from 'locomotive-scroll'


export default function Marquee() {

  const scroll = new LocomotiveScroll();
  return (
    <div data-scroll data-scroll-speed="-0.1" >
      <div className="w-screen overflow-x-hidden touch-none overscroll-x-none pointer-events-none rounded-2xl mt-10 bg-[#004d43] min-h-[60vh] max-h-[70vh] pb-10">
        <div className='w-full border-t-white/30 h-1 border-t translate-y-12'></div>
        {/* <div className="text-[580px] uppercase text-nowrap leading-120 text-white font-[Founders_Grotesk_Condensed] font-bold">We are Ochi</div>
        <div className="text-[580px] uppercase text-nowrap leading-120 text-white font-[Founders_Grotesk_Condensed] font-bold">We are Ochi</div> */}

        <div className='flex flex-row w-max animate-marquee  pb-10'>

          {/* {[1, 2].map(index => {
            return (
              <div key={index} className='basis-full min-w-screen' style={{ position: 'relative', height: '300px' }}>
                <TextPressure
                  text="Weare Ochi"
                  flex
                  alphas={[0, 0.2, 0.4, 0.6, 0.8, 1]}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="#ffffff"
                  strokeColor="#5227FF"
                  minFontSize={36}
                /> 
              </div>
            )
            
          })} */}

          {[1, 2].map((i) => {
            return <p key={i} className='text-[30vw] text-white font-[Founders_Grotesk_Condensed] font-bold -translate-y-1/6'> WE ARE OCHI </p>
          })}
        </div>

      </div>
    </div>
  )
}
