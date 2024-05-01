import React from 'react'
import Section from './Section'
import { brainwaveSymbol, check } from '../assets'
import { collabApps, collabContent, collabText } from '../Constants'
import Button from './Button'

function Collaboration() {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className='max-w-[25rem]'>
                    <h2 className='h2'>
                        Ai Chatapp for seamless coleboratin
                    </h2>
                    <ul className='max-w-[25rem] mt-10 md:mb-14 '>
                        {collabContent.map((item, i) => (
                            <li key={i} className='mb-3 py-3'>
                                <div className='flex items-center'>
                                    <img src={check} alt="check" height={24} width={24} />
                                    <h6 className='body-2 ml-5'>{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className='body-2 mt-3 text-n-4 '>{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button>Try it now</Button>
                </div>
                <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                    <p className='body-2 mb-4 text-n-4 md:mb-16 lg:mb-24 lg:w-[22rem] lg:mx-auto'>{collabText}</p>
                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                        <div className='w-60 flex rounded-full aspect-square border border-n-6 m-auto'>
                            <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                                <div className='flex items-center justify-center h-full w-full bg-n-8 rounded-full'>
                                    <img src={brainwaveSymbol} alt="brainwaveSymbol" height={48} width={48} />
                                </div>
                            </div>
                        </div>
                        {collabApps.map((app,index) => (
                            <li key={index} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45} list-none`}>
                                <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/50 rounded-xl -rotate-${index * 45}`}>
                                    <img
                                    className='m-auto'
                                    src={app.icon} alt="icon" width={app.width} height={app.height} />
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Collaboration