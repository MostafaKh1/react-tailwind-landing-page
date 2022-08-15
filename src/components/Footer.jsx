import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-black text-white text-center py-16'>
        <div className='max-w-[1240px] mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-5 '>
         {[...Array(5)].map(()=> {
            return (
                <div className='p-4 pb-8'>
                <h3 className='text-xl font-bold border-b-4 border-[#00d8ff] inline-block'>Products</h3>
                <ul>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token Lists</li>
                    <li>Defi</li>
                </ul>
            </div>
            )
         })}
        </div>
    </div>
  )
}

export default Footer