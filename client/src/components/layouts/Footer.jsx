import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-[#FFE5E5] flex flex-wrap justify-start p-5 md:justify-around md:space-y-1'>
        <div className='md:space-y-1 md:last:m-3'>
          <img className='mb-2' src='./src/assets/agencylogo.svg'/>
            <p>Street : 1273 Whitetail Lane<br/>
              City : Dallas<br/>
              State/province/area : Texas<br/>
              Phone number : 469-267-3338<br/>
              Zip code : 75201<br/>
              Country calling code : +1<br/>
              Country : United States</p>
        </div>
        <div className='mr-10 md:space-y-1'>
          <h1 className='text-2xl font-bold'>Our Services</h1>
          <p className=''>Web Design<br/>
          Web Development<br/>
          Digital Marketing<br/>
          UX/UI Design<br/>
          Technical Support<br/>
          Motion Graphics<br/>
          </p>
        </div>
        <div className='space-y-1'>
          <h1 className='text-2xl font-bold'>Important Link</h1>
          <p>Home<br/>
            Blog<br/>
            About<br/>
            Team<br/>
            Service<br/>
            Contact</p>
        </div>
        <div className='w-full md:w-1/4'>
          <h1 className='text-2xl font-bold'>News Letter</h1>
          <input type="text" id="name" className="my-4 bg-red-50 border border-black text-red-900 placeholder-red-200 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Name"></input>
          <input type="email" id="email" className="my-4 bg-red-50 border border-black text-red-900 placeholder-red-200 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400" placeholder="Email"></input>
          <button className='bg-[#FF0000] p-3 w-full rounded-lg text-white font-semibold text-xl hover:bg-rose-950'>Join Now</button>
        </div>
      </div>
      <div className='p-4 bg-black text-center text-white'><p>Copyright © 2023 AGENCY - all rights reserved</p></div>

    </div>
  )
}

export default Footer