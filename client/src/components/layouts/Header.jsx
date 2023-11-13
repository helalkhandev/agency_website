import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='flex items-center w-full justify-center bg-[#FAE2E2]'>
      <div className=''>
        <h1 className='text-4xl font-bold'><Link to='/'>LOGO</Link></h1>
        </div>
      <div className='flex text-center mx-20 my-5 p-4 grid-cols-4'>
        <ul className='flex space-x-12 text-center font-semibold'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/team'>Team</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/'></Link></li>
        </ul>
        </div>
      <div className='text-end'>Login/Register</div>
    </div>
    </>
  )
}

export default Header