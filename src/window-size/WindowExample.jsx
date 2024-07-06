import React, { useEffect, useState } from 'react'

function WindowExampleComponent() {
    const [size, setSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setSize(window.innerWidth)
            console.log('event fired')
        })
    }, [])
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-4xl'>Window Size : {size}px</h1>

    </div>
  )
}

export default WindowExampleComponent
