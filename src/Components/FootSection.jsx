import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";


const hrefLinks = [
  {href:"https://discord.com", icon:<FaDiscord/>},
  {href:"https://twitter.com", icon:<FaTwitter/>},
  {href:"https://github.com", icon:<FaGithub/>},
  {href:"https://twitch.com", icon:<FaTwitch/>}
]

const FootSection = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
       <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
         <p className='text-center text-sm md:text-left pl-2'>&copy; Nova 2025. All rights reserved</p>
         <div className='flex justify-center gap-4 md:justify-start'>
           {hrefLinks.map((link)=>{
            return <a href={link.href} key={link} target="_blank" className="text-black transition-colors duration-300 ease-in-out hover:text-white">{link.icon}</a>
           })}
         </div>
         <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
       </div>
    </footer>
  )
}

export default FootSection