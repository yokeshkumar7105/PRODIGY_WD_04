


import {ReactLenis} from 'lenis/react';
//import { gsap } from "gsap-trial";
import gsap from 'gsap';
    
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { useGSAP } from '@gsap/react';


// register gsap plugins

gsap.registerPlugin(useGSAP, ScrollTrigger);






import Header from "./components/Header";
import './index.css';
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = ()=>{


    useGSAP(()=>{
        const elements = gsap.utils.toArray('.reveal-up');

        elements.forEach((element)=>{
            gsap.to(element,{
                scrollTrigger:{
                    trigger:element,
                    start:'-200 bottom',
                    end:'bottom 80%',
                    scrub:true,
                },
                y:0,
                opacity:1,
                duration:1,
                ease:'power2.out'
            })
        })
    });

    return (
        <ReactLenis root>
        <Header/>
        <main>
            <Hero/>
            <About/>
            <Skill/>
            <Work/>
            <Achievements/>
            <Contact/>
        </main>
        <Footer/>
        </ReactLenis>
    )
}



export default App;