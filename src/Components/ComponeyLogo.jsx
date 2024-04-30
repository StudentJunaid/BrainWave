import React from 'react'
import { companyLogos } from '../Constants'

function ComponeyLogo({className}) {
  return (
    <div className={className}>
        <h5 className='tagline mb-6 text-center text-n-1/50'>Helping people to create beautifull content</h5>
        <ul className='flex'>
            {companyLogos.map((item,i) =>(
                <li key={i} className='flex items-center justify-center flex-1 h-[8.5rem]'>
                    <img src={item} alt="componey" width={134} height={28} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ComponeyLogo