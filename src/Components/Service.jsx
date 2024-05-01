import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { check, service1, service2, service3 } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../Constants'
import Generating from './Generating'
import { PhotoChatMessage, Gradient, VideoBar,VideoChatMessage } from './design/Services'

function Service() {
    return (
        <Section>
            <div className='container'>
                <Heading
                    title="Generative AI made for creaters"
                    text="Braiwave unlock the potential of Ai-powred applications"
                />
                <div className="relative">
                    <div className="relative min-h-[35rem] flex items-center z-1 border border-n-1/10 rounded-xl p-8 lg:p-20 xl:h-[46rem]">
                        <div className="w-full h-full absolute top-0 left-0 pointer-events-none md:w-3/4  xl:w-auto">
                            <img src={service1} alt="service1" className='w-full h-full object-cover md:object-right' />

                        </div>
                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h2 className='h2 mb-4'>Smartest AI</h2>
                            <p className='body-2 mb-12'>Brainwave unlocks the potential of AI-powered applications</p>
                            <ul>
                                {brainwaveServices.map((item, i) => (
                                    <li className='flex items-center my-4 border-t border-n-1/10 p-5'>
                                        <img src={check} alt="check" />
                                        <p className='ml-7'>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Generating className="absolute left-4 right-4 bottom-4  lg:left-1/2 lg:right-auto
                     lg:bottom-8 lg:-translate-x-1/2 border border-n-1/10 "/>
                    </div>
                </div>

                <div className='relative grid z-2 lg:grid-cols-2  mt-10 gap-10'>
                    <div className='relative min-h-[35rem]  border border-n-1/10 rounded-xl overflow-hidden'>
                        <div className="absolute inset-0">
                            <img src={service2} alt="service2" className='w-full h-full object-cover' width={630} height={750} />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b f f from-n-8/0 lg:p-15 ">
                            <h2 className='h2 mb-4'>Photo Editing</h2>
                            <p className='body-2 mb-12'>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
                        </div>
                        <PhotoChatMessage />
                    </div>
                    <div className='p-4 xl:min-h-[46rem] bg-n-7 rounded-xl'>
                        <h2 className='h2 mb-3'>video Generation</h2>
                        <p className='body-2'>The world’s most powerful AI photo and video art generation engine.What will you create?</p>
                        <ul className='flex justify-between items-center mt-6 mb-5'>{brainwaveServicesIcons.map((item,i) =>(
                            <li
                            key={i}
                            className={`rounded-2xl flex items-center justify-center ${i === 2 ? 'h-[3rem] w-[3rem] p-0.25 bg-conic-gradient md:h-[4.5rem] md:w-[4.5rem]':'flex w-10 h-10 bg-n-6 md:w-15 md:h-15'}`}>
                               <div className={i === 2 ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]' : ''}> 
                                <img src={item} alt="item" width={24} height={24}  />
                               </div>
                            </li>
                        ))}</ul>
                        <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
                            <img src={service3} alt="scary robot" width={450} height={400}  />
                        <VideoChatMessage/>
                        <VideoBar/>
                        </div>
                    </div>
                    
                </div>
                <Gradient/>
            </div>
        </Section>
    )
}

export default Service