import React from 'react'

function Subscribe() {
  return (
    <div className='w-full bg-black text-white text-center'>
        <h1 className='py-4'>Join Our DeFi Community</h1>
        <div className=''>
            <input className='mb-5 xs:mb-0 p-4 mr-2 rounded-3xl py-3 ' type="text" placeholder='Enter your email'/>
            <button className=''>Sign Up</button>
        </div>
        <div className='flex justify-center p-4  text-center items-center'>
            <input className='text-black'  type="checkbox"/>
            <p className='ml-2  '>Yes, I agree to receive email communications from DeFi.</p>
        </div>
    </div>
  )
}

export default Subscribe