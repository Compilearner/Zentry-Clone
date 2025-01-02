import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import { useRef } from 'react';
import gsap from 'gsap';
import Button from './Button';

export const Story = () => {
const imageRef = useRef(null);

const handleMouseMove = (e)=>{
   const element = imageRef.current;
   const {left, top, width, height} = element.getBoundingClientRect();

   const X = e.clientX- left;
   const Y = e.clientY - top;

   const centerX = width/2;
   const centerY = height/2;

   const rotateX = ((Y-centerY)/ centerY)* -10;
   const rotateY = ((X-centerX)/ centerX)* 10;

   gsap.to(element, {
    duration : 0.3,
    rotateX, rotateY,
    transformPerspective : 500,
    ease: 'power1.innOut', 
   })
}

const handleMouseLeave = ()=>{
    const element = imageRef.current;
    gsap.to(element, {
    duration : 0.3,
    rotateX : 0,
    rotateY : 0,
    ease: 'power1.innOut', 
   })
    
}

  return (
    <section id='story' className='min-h-dvh text-blue-50 w-screen bg-black'>
        <div className='flex flex-col size-full items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>The multiversal ip world</p>
            {/** Container for Animated title and image */}
             <div className='relative size-full'>
               <AnimatedTitle title=" The st<b>o</b>ry of </br> a hidden realm"
               containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10 "
               sectionId = "#story"/>
               <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                           <img ref={imageRef} src='/img/entrance.webp' alt='entrance' className='object-contain rounded-lg'
                            onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}  />
                        </div>
                    </div>
               </div>
               {/** Small Div Container */}
             <div className='md:absolute md:right-[10px] md:bottom-[60px] w-[55%]  md:w-[40%] p-2 flex flex-col items-center md:items-start gap-3 md:mt-0 mx-auto mt-[-6rem]' >
                <p className='font-circular-web text-violet-50 text-center max-w-sm md:text-start'>Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.</p>
                <Button id="story-btn" title="Discover Prologue"/>
             </div>
             </div>
        </div>
    </section>
  )
}
