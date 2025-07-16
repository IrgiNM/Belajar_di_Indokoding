import React from 'react'

export default function Service() {
  return (
    <div className='flex flex-col items-center min-h-screen gap-2'>
        <p>what we do</p>
        <h1 className='text-2xl text-[30px] font-bold text-[#005CB2]'>Our Services</h1>
        <div>

        </div>

    </div>
  )
}

function serviceCard(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}
