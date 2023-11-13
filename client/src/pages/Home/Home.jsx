import React from 'react'
import Header from '../../components/layouts/Header'
import Footer from '../../components/layouts/Footer'

function Home() {
  return (
    <div>
      <Header/>
        <div className='bg-[#FFF9F9] flex w-full items-center grid grid-cols-2 gap-8 p-40'>
          <div>
            <h2 className='uppercase'>Digital Solution</h2>
            <h1 className='text-[#000000] font-bold text-5xl mb-3'>We Provide Truly Creative<br/>
                Digital Solutions </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='bg-[#C1EBE1] px-3 py-1 text-lg font-semibold mt-2 hover:bg-[#20F1BF]'>Get Start Now</button>
          </div>
          <div className='text-6xl items-center text-center'>Image</div>
        </div>
      <Footer/>
      </div>
  )
}

export default Home