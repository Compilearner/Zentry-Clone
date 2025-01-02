import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger);

function About(){

    useGSAP(()=>{
        const Clipanimation  = gsap.timeline({
          scrollTrigger:{
            trigger : '#clip',
            start: 'center center',
            end: '+=800 center',
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
             ease: 'power1.inOut', // Smooth easing effect
          }  
        })

        Clipanimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
        <div id="about" className="min-h-[60vh] w-screen">
        <div className="flex flex-col items-center relative mb-8 mt-36 gap-5">
            <h2 className="font-general text-lg uppercase md:text-[10px]">
                Welcome to Zentry
            </h2>
            <AnimatedTitle title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure" containerClass=" mt-5 !text-black text-center"/>
            <div className="about-subtext">
            <p>The Game of Games begins-your life, now an epic MMORPG</p>
            <p>Zentry unites every player from countless games and platforms</p>
        </div>
    </div>
    <div className="h-dvh w-screen border-black" id="clip">
        <div className="mask-clip-path about-image ">
            <img 
            src="img/about.webp"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
            />
        </div>
     </div>
</div> 
    );
}

export default About