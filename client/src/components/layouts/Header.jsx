import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='p-1 flex flex-wrap md:flex items-center w-full justify-around bg-[#FAE2E2]'>
      <div className='ml-32 justify-start'>
        <h1 className='text-4xl font-bold'><Link to='/'><img src='../src/assets/agencylogo.svg'/></Link></h1>
        </div>
      <div className='flex text-center mx-20 my-5 p-4'>
        <ul className='flex space-x-12 text-center font-semibold'>
          <li><Link to='/' className='hover:font-bold hover:underline'>Home</Link></li>
          <li><Link to='/blog' className='hover:font-bold hover:underline'>Blog</Link></li>
          <li><Link to='/about' className='hover:font-bold hover:underline'>About</Link></li>
          <li><Link to='/team' className='hover:font-bold hover:underline'>Team</Link></li>
          <li><Link to='/service' className='hover:font-bold hover:underline'>Service</Link></li>
          <li><Link to='/contact' className='hover:font-bold hover:underline'>Contact</Link></li>
        </ul>
        </div>
      <div className='text-end'>Login/Register</div>
    </div>
    </>
  )
}

export default Header