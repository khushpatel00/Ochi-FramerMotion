import LocomotiveScroll from 'locomotive-scroll'
import { useState } from 'react';
function Eyes() {
  const locomotive = new LocomotiveScroll();
  // const [mouseX, setMouseX] = new useState(0);
  // const [mouseY, setMouseY] = new useState(0);
  // let xindex = 0, yindex = 0;
  let [xindex, setXindex] =  new useState(0)
  let [yindex, setYindex] =  new useState(0)

    window.addEventListener('mousemove', (e) => { 
      // xPropotion = Math.floor((e.x / window.innerWidth) * 100);
      // yPropotion = Math.floor((e.y / window.innerHeight) * 100);
      // setMouseX(Math.floor((e.x / window.innerWidth) * 100));
      // setMouseY(Math.floor((e.y / window.innerHeight) * 100));

      // xindex = e.clientX - (window.innerWidth / 2);
      // yindex = e.clientY - (window.innerHeight / 2); 
      // xindex = Math.floor((xindex / window.innerWidth) * 20);
      // yindex = Math.floor((yindex / window.innerHeight) * 20);


      setXindex(((e.clientX - (window.innerWidth / 2)) / window.innerWidth) * 40);
      setYindex(((e.clientY - (window.innerHeight / 2)) / window.innerHeight) * 40);

      // console.log(xindex, yindex);
    })

  return (
    <>
      <div className='w-screen h-screen relative -z-10' style={{ backgroundImage: 'url("/images/eyesBG.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div>
          <div className="absolute rounded-full p-2 mx-10 w-[14vw] aspect-square top-1/2 right-1/2 bg-white">
            <div style={{transform: `translate(${xindex}%, ${yindex}%)`}} className="bg-zinc-800 w-[8vw] aspect-square z-2 rounded-full top-1/2 left-1/2 -translate-1/2 relative">
              <div className="bg-white w-[1.2vw] aspect-square z-3 absolute top-1/2 -translate-y-1/2 rounded-full"></div>
            </div>
          </div>
          <div className="absolute rounded-full p-2 mx-10 w-[14vw] aspect-square top-1/2 left-1/2 bg-white">
            <div style={{transform: `translate(${xindex}%, ${yindex}%)`}} className="bg-zinc-800 w-[8vw] aspect-square z-2 rounded-full top-1/2 left-1/2 -translate-1/2 relative">
              <div className="bg-white w-[1.2vw] aspect-square z-3 absolute top-1/2 -translate-y-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Eyes