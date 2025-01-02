
import './App.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Features from './Components/Features';
import FootSection from './Components/FootSection';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import { Story } from './Components/Story';


function App() {
   return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-zinc-200'>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <FootSection/>
    </main>
   );
}

export default App
