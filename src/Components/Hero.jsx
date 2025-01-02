import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from 'react-icons/ti'; // Import the Typicon icon
import { gsap } from 'gsap';
import {useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const [currentIdx, setCurrentIdx] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(1); 

    const totalVid = 4;
    const nextVdRef = useRef(null);

const upcomingVideoIdx = (currentIdx % totalVid +1);   

const handleMiniVideo = ()=>{
    setHasClicked(true);
    setCurrentIdx((currentIdx)=> {
          if(currentIdx == 4){
            return currentIdx = 1;
          }else{
            return currentIdx+1;
          }
    }
    );

}

const getVdSrc = (index)=> `videos/hero-${index}.mp4`;

const handleVideoLoad = ()=>{
    // if(nextVdRef.current){
    //     nextVdRef.current.currentTime = 0; // Reset playback time
    //     nextVdRef.current.play();
    // }
    setLoadedVideos((prev)=> prev+1)
}

useEffect(()=>{
  if(loadedVideos === totalVid - 1){
    setIsLoading(false);
  }
}, [loadedVideos])

useGSAP(()=>{
    if(hasClicked){
        gsap.set('#next-video', {visibility : 'visible'});
        gsap.to('#next-video', {
            transformOrigin: 'center center',
            scale : 1,
            width: '100%',
            height: '100%',
            duration : 1,
            ease : 'power1.inOut',
            onStart :()=> nextVdRef.current.play(),
            

        })
        gsap.from('#current-video', {
           transformOrigin: 'center center',
            scale : 0,
            duration : 1.5,
            ease : 'power1.inOut', 
        })
    }
}, {dependencies: [currentIdx], revertOnUpdate: true});

useGSAP(()=>{
    gsap.set('#video-frame', {
        clipPath: 'polygon(13% 0%, 80% 0%, 89% 84%, 5% 97%)',
        borderBottomLeftRadius : '20%',
        borderBottomRightRadius: '60%',
    })

    gsap.from('#video-frame', {
        clipPath :  'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        borderRadius : '0 0 0 0',
        ease : 'power1.inOut',
        scrollTrigger: {
            trigger : '#video-frame',
            start: 'center center',
            end: 'bottom center',
            scrub: true,
        }
    })
})

 return (
    <div className=" relative h-dvh w-screen overflow-x-hidden">
        {/* Main Video playing in the background */ }
        {isLoading && (
            /** Progress Indicator Window */
            <div className=" flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                <div className="three-body">
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                </div>
            </div>
        )}
        <div id="video-frame" className=" relative z-10 h-dvh overflow-hidden rounded-lg bg-blue-75 ">
            <div className="mask-clip-path absolute-center z-50 size-80 cursor-pointer overflow-hidden rounded-lg">
                 <div onClick={handleMiniVideo} className="origin-center scale-50 opacity-0 transition-all duration-700 ease-in-out hover:scale-100 hover:opacity-100">
                    <video ref={nextVdRef} src={getVdSrc(upcomingVideoIdx)} loop muted id="current-video" className=" size-80 origin-center scale-50 object-cover rounded-lg" onLoadedData={handleVideoLoad}/>
                   
                 </div>
            </div>
            <video id="next-video" ref={nextVdRef}  src={getVdSrc(currentIdx)} className="absolute-center invisible absolute z-20 size-64 object-cover object-center" onLoadedData={handleVideoLoad}/>
            <video src={getVdSrc(currentIdx)} autoPlay muted loop className="absolute left-0 top-0 size-full object-cover object-center" onLoadedData={handleVideoLoad}/>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-blue-75 z-40"> G<b>a</b>ming</h1>
        <div className="absolute z-40  left-0 top-0 size-5/12"> 
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>
              <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                Enter the Metagame Layer <br/>
                Unleash the Play Economy
              </p>
              <Button id="watch-trailer" title="Watch the Trailer" containerClass = " !bg-yellow-300 flex-center gap-1" leftIcon={<TiLocationArrow/>} />
            </div>
        </div>
        </div>
            {/* It will see when we scrolls down*/ }
       <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black"> G<b>a</b>ming</h1>
    </div>
 ); 

}

export default Hero