import React , {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false)
  return (
    <div className="w-full h-[90px] bg-black">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
            <div>
                <h1 className='text-[#00d8ff]'>DEFI</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex text-white items-center'>
                    <li>Platform</li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>About</li>
                    <button className='ml-4'>Use DEFI</button>
                </ul>
            </div>
            {/* Hamburger Menu */}
            <div className='block md:hidden' onClick={() => setNav(!nav)}>
                {nav ? <AiOutlineClose  size={30}  className="text-white "/> : <AiOutlineMenu  size={30}  className="text-white "/>}

             </div>
             <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 justify-center text-center' : 'hidden'}>
                <ul>
                    <li>Platform</li>
                    <li>Developers</li>
                    <li>Community</li>
                    <li>About</li>
                    <button className='m-8'>Use DEFI</button>
                </ul>
             </div>

        </div>
    </div>
  )
}

export default Navbar