import React from 'react'

function ProgressBar({progress=40}) {
  return (
    <div className='bg-gray-400 w-full p-1 h-3 mt-3 rounded-full'>
        <div className=' bg-primary h-3 rounded-full text=[10px] text-white'
        style={{width:`${pro}%`}}>
    {`${Number(progress).toFixed(80)}%`}

        </div>
    </div>
  )
}

export default ProgressBar