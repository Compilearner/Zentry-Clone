import Button from './Button';

const ImageClip = ({src, clipClass})=>{
    return (
          <div className={clipClass}>
            <img src={src}/>
          </div>
    );
}

const Contact = () => {
  return (
    <div id="contact" className=" my-20 min-h-96 w-screen px-10">
        <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden ">
          {/** Image Container 1st */}
            <div className=" absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 ">
                <ImageClip src="img/contact-1.webp" clipClass="contact-clip-path-1"/>  
                <ImageClip src="img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"/>
            </div>
          {/** Image Container 2nd */}
            <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
               <ImageClip src="img/swordman-partial.webp" clipClass="absolute md:scale-125"/>  
               <ImageClip src="img/swordman.webp" clipClass="sword-man-clip-path md:scale-125"/>
            </div>
          {/** Text Container  */} 
            <div className="flex flex-col  items-center text-center gap-1 ">
                <p className=" uppercase font-general text-[10px] mt-[3rem] sm:mt-0">Join the Zentry</p>
                <p className="special-font mt-10 w-full font-zentry text-5xl md:text-[6rem]">Let's build the <br/> new era of <br/> gaming together</p>
                <Button title="contact us" containerClass=" mt-10"/>
            </div>
        </div>
    </div>
  );
}

export default Contact