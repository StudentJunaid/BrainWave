import React, { useRef } from 'react'
import Section  from './Section'
import { curve, heroBackground, robot } from '../assets'
import Button from './Button'
import { BackgroundCircles, BottomLine, Gradient } from './design/Hero'
import { ScrollParallax } from 'react-just-parallax'
import { heroIcons } from '../Constants'
import Generating from './Generating'
import Notification from './Notification'
import ComponeyLogo from './ComponeyLogo'

function Hero() {
    const parallaxRef = useRef(null);
  return (
    <Section
    className="pt-[12rem] -mt-5.25rem"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    id="hero"
    customPadding
    >
        <div className="container relative" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                <h1 className='h1 mb-6'>Explore the Possibilities of&nbsp;AI&nbsp;Chatting with Brainwave <span className='inline-block relative'><img src={curve} width={624} height={28}/></span></h1>
                <p className='mx-auto max-w-3xl body-1 mb-6 text-n-2 lg:mb-2'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
                <Button white>Get Started</Button>
            </div>
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative bg-n-8 rounded-[1rem]">
                        <div className="h-[1.5rem] bg-n-10 rounded-t-[0.9rem]"/>
                            <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1204/490]'>
                                <img src={robot} 
                                className='w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]'
                                alt="Ai"
                                width={1024}
                                height={490}
                                />
                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/>
                                <ScrollParallax isAbsolutelyPositioned>
                                   <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem] p-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex'>
                                    {heroIcons.map((icon,i) =>(
                                        <li key={i} className='p-5'>
                                            <img src={icon} alt="icon" width={24} height={25} />
                                        </li>
                                    ))}
                                   </ul>
                                </ScrollParallax>
                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification 
                                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                    tittle="Code generation"
                                    />
                                </ScrollParallax>
                            </div>
                        
                    </div>
                    <Gradient/>
                </div>
                <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
                    <img src={heroBackground} 
                     alt="hero"
                     width={1440}
                     height={1800}
                    />
                </div>
                <BackgroundCircles/>
            </div>
            <ComponeyLogo className="hidden relative mb-20 z-10 lg:block"/>
        </div>
        <BottomLine/>
    </Section>
    
  )
}

export default Hero