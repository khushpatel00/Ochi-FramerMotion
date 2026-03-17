import { useState, useEffect } from 'react';

function Eyes() {
  // offsets in pixels relative to each eye center
  const [pupilPos1, setPupilPos1] = useState({ x: 0, y: 0 });
  const [highlightPos1, setHighlightPos1] = useState({ x: 0, y: 0 });
  const [pupilPos2, setPupilPos2] = useState({ x: 0, y: 0 });
  const [highlightPos2, setHighlightPos2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // compute pixel measurements for eyes and pupil
      const outerDiameter = window.innerWidth * 0.14; // 14vw
      const pupilDiameter = window.innerWidth * 0.08; // 8vw
      const outerRadius = outerDiameter / 2;
      const pupilRadius = pupilDiameter / 2;
      const maxOffset = outerRadius - pupilRadius - 2; // keep inside edge with small margin
      const highlightRatio = 1; // highlight offset relative to pupil offset

      const eye1Center = { x: window.innerWidth * 0.25, y: window.innerHeight * 0.5 };
      const eye2Center = { x: window.innerWidth * 0.75, y: window.innerHeight * 0.5 };

      const calculateOffset = (center) => {
        const dx = e.clientX - center.x;
        const dy = e.clientY - center.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance === 0) return { x: 0, y: 0 };
        const limited = Math.min(distance, maxOffset);
        const ratio = limited / distance;
        return { x: dx * ratio, y: dy * ratio };
      };

      const off1 = calculateOffset(eye1Center);
      const off2 = calculateOffset(eye2Center);

      // each eye moves independently
      setPupilPos1({ x: off1.x / 2, y: off1.y / 2 });
      setPupilPos2({ x: off2.x / 2, y: off2.y / 2 });
      setHighlightPos1({ x: off1.x * highlightRatio, y: off1.y * highlightRatio });
      setHighlightPos2({ x: off2.x * highlightRatio, y: off2.y * highlightRatio });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className='w-screen h-screen relative -z-10' style={{ backgroundImage: 'url("/images/eyesBG.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div>
          {/* Left Eye */}
          <div className="absolute rounded-full p-2 mx-10 w-[14vw] aspect-square top-1/2 right-1/2 bg-white">
            <div style={{transform: `translate(calc(-50% + ${pupilPos1.x}px), calc(-50% + ${pupilPos1.y}px))`}} className="bg-zinc-800 w-[8vw] aspect-square z-2 rounded-full top-1/2 left-1/2 absolute">
              <div style={{transform: `translate(calc(-50% + ${highlightPos1.x}px), calc(-50% + ${highlightPos1.y}px))`}} className="bg-white w-[1.2vw] aspect-square z-3 rounded-full absolute top-1/2 left-1/2"></div>
            </div>
          </div>
          {/* Right Eye */}
          <div className="absolute rounded-full p-2 mx-10 w-[14vw] aspect-square top-1/2 left-1/2 bg-white">
            <div style={{transform: `translate(calc(-50% + ${pupilPos2.x}px), calc(-50% + ${pupilPos2.y}px))`}} className="bg-zinc-800 w-[8vw] aspect-square z-2 rounded-full top-1/2 left-1/2 absolute">
              <div style={{transform: `translate(calc(-50% + ${highlightPos2.x}px), calc(-50% + ${highlightPos2.y}px))`}} className="bg-white w-[1.2vw] aspect-square z-3 rounded-full absolute top-1/2 left-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Eyes