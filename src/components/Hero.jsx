import React from 'react'
import HeroVideo from "../assets/video.mp4"

function Hero() {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className='object-cover  h-full w-full absolute z-[-1]' src={HeroVideo} autoPlay loop muted />
        <div className='w-full h-[90%] flex justify-center items-center flex-col px-4 text-white'>
            <h1>Decentralized</h1>
            <h1 className='py-2'>
                <span className='blue'>Trading</span> Protocol
            </h1>
            <p className=' text-xl  py-4 s:text-lg text-center'>
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
            <button className='m-2'>Use Defi</button>
            <button className='m-2'>FAQ</button>
        </div>
        </div>
        <div>
            <p className='text-white text-center text-2xl font-bold'>Total Volume Secured: $42,104,783,662,76</p>
        </div>
    </div>
  )
}

export default Hero