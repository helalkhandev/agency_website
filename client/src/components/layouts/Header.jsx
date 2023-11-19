import React, { useState } from  'react'
import { Link } from 'react-router-dom'



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className='justify-between p-1 flex md:flex items-center w-full md:justify-around bg-[#FAE2E2]'>
      <div className='justify-start ml-10 md:ml-0'>
        <h1 className='text-4xl font-bold'><Link to='/'><img src='../src/assets/agencylogo.svg'/></Link></h1>
        </div>
      <div className='hidden md:flex md:text-center md:mx-20 md:my-5 md:p-4'>
        <ul className='flex space-x-12 text-center font-semibold'>
          <li><Link to='/' className='hover:font-bold hover:underline'>Home</Link></li>
          <li><Link to='/blog' className='hover:font-bold hover:underline'>Blog</Link></li>
          <li><Link to='/about' className='hover:font-bold hover:underline'>About</Link></li>
          <li><Link to='/team' className='hover:font-bold hover:underline'>Team</Link></li>
          <li><Link to='/service' className='hover:font-bold hover:underline'>Service</Link></li>
          <li><Link to='/contact' className='hover:font-bold hover:underline'>Contact</Link></li>
        </ul>
        </div>
      <div className='hidden md:text-end md:p-5 md:block'>Login/Register</div>

      <button className="sm:hidden m-5" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#FAE2E2] border rounded-md mt-[390px] p-4 text-end z-10 absolute w-[368px] ">
          <ul className="">
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              <Link to="/team">Team</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              {" "}
              <Link to="/service">Service</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:bg-rose-600 hover:text-white hover:rounded-md p-2 pr-4">
              <Link to="/">Login/Register</Link>
            </li>

          </ul>
        </div>
      )}




    </div>
    </>
  )
}

export default Header