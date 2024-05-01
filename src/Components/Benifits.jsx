import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../Constants'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'

function Benifits() {
    return (
        <Section id="features">
            <div className="container relative z-2">
                <Heading clasName="md:max-w-md lg:max-w-2xl " title="Chat smarter not harder,with Brainwave" />
                <div className='flex flex-wrap gap-10 mb-10'>
                    {benefits.map((item) => (
                        <div
                            className='block relative p-0.5 bg-cover md:max-w-[24rem]'
                            key={item.id}
                            style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                        >
                            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]  pointer-events-none'>
                                <h5 className='h5 text-lg mb-6'>{item.title}</h5>
                                <p className='text-base mb-6 text-gray-700'>{item.text}</p>
                                <div className='flex items-center mt-auto'>
                                    <img src={item.iconUrl} alt={item.title} width={48} height={48} />
                                    <p className='ml-auto text-sm font-medium text-gray-600 uppercase tracking-wide'>Explore more</p>
                                    <Arrow />
                                </div>
                            </div>
                            {item.light && <GradientLight />}
                            <div className='absolute inset-0.5 bg-n-8' style={{clipPath: "url(#benefits)"}}>
                            <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                                {item.imageUrl && (
                                    <img src={item.imageUrl} alt="item.title"
                                    width={380}
                                    height={362}
                                    className='w-full h-full object-cover'
                                    />
                                )}
                            </div>
                          </div>
                          <ClipPath/>
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    )
}

export default Benifits