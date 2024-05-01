import React from 'react'

function Heading({clasName,title}) {
  return (
    <div className={`${clasName} max-2-[50rem] mx-auto mb-12 lg:mb-20`}>
        {title && <h2 className='h2'> {title} </h2>}
    </div>
  )
}

export default Heading