import React from 'react'
import Section from './Section'
import { socials } from '../Constants'

function Footer() {
  return (
    <Section>
        <div className='container pt-10 border-t border-n-9 flex justify-center items-center sm:justify-between gap-10 max-sm:flex-col'>
            <p> &copy; 2024 all right reserved </p>
            <ul className='flex gap-10 flex-wrap'>{socials.map((item ) =>(
                
                    <a key={item.id} href={item.url} id={item.id} target='__blanck' className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bgn-6'>
                        <img src={item.iconUrl} alt={item.title} width={24} height={24} />
                    </a>
                
            ))}</ul>
        </div>
    </Section>
  )
}

export default Footer