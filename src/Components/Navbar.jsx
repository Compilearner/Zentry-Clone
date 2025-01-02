import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import {useWindowScroll} from 'react-use'
import { gsap } from "gsap";

function Navbar(){
  {/** Navbar visibility based on Scroll */}
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const {y: currentScrollY} = useWindowScroll();

  useEffect(()=>{
    {/** No Scroll- Just at the Top */}
     if(currentScrollY === 0){
      setIsNavVisible(true);
      navRef.current.classList.remove('floating-nav');
     }
     else if(currentScrollY > lastScrollY){
      /** Just Going down */
        setIsNavVisible(false);
        navRef.current.classList.remove('floating-nav');
     }
     else if(currentScrollY < lastScrollY){
      /** Real-time moving above-Which means Lost */
        setIsNavVisible(true);
        navRef.current.classList.add('floating-nav');
     }
     setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY])

  useEffect(()=>{
      gsap.to(navRef.current,{
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration : 0.2, 
      })
  }, [isNavVisible])



  const [audioPlaying, setAudioPlaying] = useState(false);
  const [isIndicator, setIsIndicator] = useState(false);

  const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];
  const navRef = useRef(null);
  const audioRef = useRef(null);

  const toggleAudio = ()=>{
       setAudioPlaying(!audioPlaying);
       setIsIndicator(!isIndicator);
  }

  useEffect(()=>{
    if(audioPlaying){
      audioRef.current.play();
    }else{
      audioRef.current.pause();
    }
  },[audioPlaying]);

    return (
      <div
      ref={navRef}
      className={`fixed inset-x-0 top-4 z-50  h-16 border-none transition-all duration-700 sm:inset-x-6 flex items-center `}
    >
        <header className="absolute  w-full  ">
         <nav className=" flex items-center size-full justify-between p-4  ">
          {/** Left Part */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10"/>
            <Button 
            title="Products"
            id="product-button"
            containerClass="bg-blue-50 hidden items-center justify-center gap-1 md:flex "
            rightIcon ={<TiLocationArrow/>}
             />
          </div>

          {/** Right Part */}
           <div className="flex h-full items-center">
            <div className="hidden md:block">
             {navItems.map((item, index)=>(
                <a key={index} className="nav-hover-btn" href={`#${item.toLowerCase()}`}>
                {item}</a>
             ))}
            </div>

            {/**Music System */}
            <button className="ml-10 flex items-center space-x-0.5 border-none" onClick={toggleAudio}>
              <audio ref={audioRef} className="hidden" src="/audio/loop.mp3" loop/>
              {[1,2,3,4].map((bar)=>(
                <div key={bar} className={`indicator-line ${isIndicator ? 'active' : ''}`} style={{animationDelay : `${bar*0.1}s`}}>

                </div>
              ))}

            </button>

           </div>

         </nav>
        </header>
        </div>
    );
}

export default Navbar