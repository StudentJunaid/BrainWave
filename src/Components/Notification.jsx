import React from 'react'
import { notificationImages } from '../Constants'
import { notification1 } from '../assets'

function Notification({className,tittle}) {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}>
           <img src={notification1} alt="notification" width={62} height={62} className='rounded-xl' />
        <div className='flex-1'>
            <h6 className='mb-1 font-semibold text-base'>{tittle}</h6>
            <ul className='flex items-center'>
                {notificationImages.map((item,index) =>(
                    <li key={index} className='flex w-6 h-6 rounded-full border-2 border-n-12 overflow-hidden'>
                        <img src={item} alt="item" className='w-full' height={20} width={20} />
                    </li>
                ))}
            </ul>
            <div className="body-2 text-n-13">1m ago</div>
        </div>
    </div>
    
  )
}

export default Notification