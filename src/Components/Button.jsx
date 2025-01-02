
function Button({title, id, containerClass, leftIcon, rightIcon}){
    return (
       <button key={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-6 py-3 text-black
       ${containerClass}`}>
          {leftIcon}
          <span className="ml-2 relative inline-flex overflow-hidden font-general text-xs uppercase">
            {title}
          </span>
          {rightIcon}
       </button>
    );
}

export default Button