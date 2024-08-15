import React, { useEffect } from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center  p-3 bg-[#040303] text-white ' >
        <div className="logo">
            <img src="/check-list.png" className='h-8 w-11 object-contain ' alt="" />
        </div>
        <div className="content mr-3 ">
            <ul className='flex  gap-6 ' >
                <li className='text-lg font-mono  hover:cursor-pointer hover:underline transition-all'  >Home</li>
                <li className='text-lg font-mono hover:cursor-pointer hover:underline transition-all '  >Portfolio</li>
                <li className='text-lg font-mono hover:cursor-pointer hover:underline transition-all '  >Expertise</li>
                <li className='text-lg font-mono hover:cursor-pointer hover:underline transition-all '  >About</li>
                <li className='text-lg font-mono hover:cursor-pointer hover:underline transition-all '  >Contact Us</li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar

