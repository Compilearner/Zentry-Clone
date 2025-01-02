import { TiLocationArrow } from "react-icons/ti";
import Bentocard from "./Bentocard";
import { useRef, useState } from "react";

{/** Creating the tilt Effect on Bentocards */}
const BentoTilt = ({children, className})=>{
  const [transformStyle , setTransformStyle] = useState('');
  const itemRef = useRef(null);

  const handleMouseMove = (e)=>{
    if(!itemRef.current){
      return;
    }

    const {left, top, width, height} = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left)/width;
    const relativeY = (e.clientY - top) /height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5; 
    
    const newTransform  = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);

  }

  const handleMouseLeave = ()=>{
    setTransformStyle('');
  }

    return (
    <div className={className} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={itemRef} style={{transform: transformStyle}}>
      {children}
    </div>
    );
}


function Features(){
    return(
     <section className="bg-black pb-52">
        {/*** Container */}
      <div className="container mx-auto px-3 md:px-8">
        {/** Div1 */}
          <div className=" px-5 py-32">
            <p className=" font-circular-web text-lg text-blue-50">Into the Metagame Layer</p>
            <p className=" max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                Immerse youself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnceted overlay experiance on your world.
            </p>
          </div>
        {/** Bento-Card1 */}  
          <BentoTilt className=" border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
            <Bentocard 
            srcURL="videos/feature-1.mp4"
            title={<>radia<b>n</b>t</>}
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            />
          </BentoTilt>

           {/** Grid-Based System */}
          <div className=" grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                <BentoTilt className=" bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                    <Bentocard srcURL="videos/feature-2.mp4"
                    title={<>zigma</>}
                    description={"An anime and gaming-inspired NFT collection - the IP primed for expansion."}/>
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms:0">
                   <Bentocard 
                   srcURL={"videos/feature-3.mp4"}
                   title={<>n<b>e</b>xus</>}
                   description={"A gamified social hub, adding a new dimension of play to social interaction for web3 communities."}/>
                   
                </BentoTilt>
                <BentoTilt className="bento-tilt_1 row-span-1 me-14 md:col-span-1 md:me:0">
                   <Bentocard 
                   srcURL={"videos/feature-4.mp4"}
                   title={<>az<b>u</b>l</>}
                   description={"A gamified social hub, adding a new dimension of play to social interaction for web3 communities."}/>
                   
                </BentoTilt>

                {/** Grid */}
                <div className=" bento-tilt_2">
                    {/** Another Flex Container */}
                    <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                         <h1 className="bento-title special-font max-w-64 text-black"> M<b>o</b>re co<b>m</b>ing so<b>o</b>n </h1>
                         <TiLocationArrow className="m-5 self-end scale-[5]" />
                    </div>
                </div>
                <div className="bento-tilt_2">
                    <video src="videos/feature-5.mp4" loop muted autoPlay className=" size-full object-cover object-center">
                    </video>
                </div>
          </div>
      </div>
     </section>
    );
}

export default Features