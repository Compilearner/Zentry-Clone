import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function AnimatedTitle({title, containerClass}){
    const containerRef = useRef(null);

    useEffect(()=>{
    const context = gsap.context(()=>{
        const titleAnimation = gsap.timeline({
            scrollTrigger:{
                trigger: containerRef.current,
                start: '100 bottom',
                end: 'center bottom',
                toggleActions: 'play none none reverse',
            }
        });

        titleAnimation.to('.animated-word', {
            opacity: 1,
            transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
            ease: 'power1.inOut',
            stagger: 0.02,
        })

    }, containerRef)
    return ()=>context.revert();
    },[]);

    return(
      <div className={`animated-title ${containerClass}`} ref={containerRef}>
               {title.split('<br/>').map((line, index)=>{
                return <div key={index} className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                    {line.split(' ').map((word, i)=>{
                     return <span key={i} className=" animated-word " dangerouslySetInnerHTML={{__html:word}}></span>
                    })}
                </div>
               })}
            </div> 
    );
}
export default AnimatedTitle