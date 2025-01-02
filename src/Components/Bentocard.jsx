

const Bentocard = ({srcURL, title, description})=>{
     return(
       <div className="relative size-full">
        <video src={srcURL} muted loop autoPlay className=" absolute left-0 top-0 size-full object-cover object-center">
        </video>
        <div className=" relative z-10  flex flex-col size-full justify-between p-5 text-blue-50">
           <div>
            <h1 className="bento-title special-font">{title}</h1>
            { description && (<p className="mt-3 max-w-md text-xs md:text-base ">{description}</p>)}
           </div>
        </div>
       </div>
     );
}

export default Bentocard