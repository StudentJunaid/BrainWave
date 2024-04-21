import React from 'react'
import Section  from './Section'
import { curve, heroBackground, robot } from '../assets'
import Button from './Button'

function Hero() {
  return (
    <Section
    className="pt-[12rem] -mt-5.25rem"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    id="hero"
    customPadding
    >
        <div className="container relative">
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                <h1 className='h1 mb-6'>Explore the Possibilities of AI Chatting with Brainwave <span className='inline-block relative'><img src={curve} width={624} height={28}/></span></h1>
                <p className='mx-auto max-w-3xl body-1 mb-6 text-n-2 lg:mb-2'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
                <Button white>Get Started</Button>
            </div>
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative bg-n-8 rounded-[1rem]">
                        <div className="h-[1.5rem] bg-n-10 rounded-t-[0.9rem]"/>
                            <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1204/490]'>
                                <img src={robot} 
                                className='w-full'
                                alt="Ai"
                                width={1024}
                                height={490}
                                />
                            </div>
                        
                    </div>
                </div>
                <div className='absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]'>
                    <img src={heroBackground} 
                     alt="hero"
                     width={1440}
                     height={1800}
                    />
                </div>
            </div>
        </div>
    </Section>
    
  )
}

export default Hero