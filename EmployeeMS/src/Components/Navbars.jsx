


import '../index.css';


import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbars= () => {
  const [nav , setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="h-full bg-black">
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-black'>
      <hl className="w-full text-3xl font-bold text-[#00df9a]">Emp</hl>
      <ul className="hidden md:flex">
        <li className="p-4"><a href="home">HOME</a></li>
        <li className="p-4"><a href="service">SERVICE</a></li>
        <li className="p-4"><a href="contact">CONTACT</a></li>
        <li className="p-4"><a href="about">ABOUT</a></li>
        <li className="p-4"><a href="login">LOGIN</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>

        {!nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
     
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500': 'fixed left-[-100%]' }>
      <hl className="w-full text-3xl font-bold text-[#00df9a] m-4">Emp</hl>
        <ul className=' upparcase p-4'>
        <li className="p-4 border-b border-gray-600"><a href="home">HOME</a></li>
        <li className="p-4 border-b border-gray-600"><a href="service">SERVICE</a></li>
        <li className="p-4 border-b border-gray-600"><a href="contact">CONTACT</a></li>
        <li className="p-4 border-b border-gray-600"><a href="about">ABOUT</a></li>
        <li className="p-4 border-b border-gray-600"><a href="login">LOGIN</a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbars