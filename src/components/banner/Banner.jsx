import React from 'react'
import banner_image from "../../images/banner_image.png"
import  Container  from '../container/Container'

const Banner = () => {
  return (
    <section className='bg-[#40BFFF]'>
      <Container>
        <div className='flex justify-between flex-wrap mt-52'>
          <div className='flex flex-col items-start justify-center'>
            <h2 className="text-white text-[55px] font-medium mb-6">Adidas Men Running<br/>Sneakers</h2>
            <p className="text-white text-2xl font-normal mb-3 ">Performance and design. Taken right to the edge.</p>
            <strong className="text-white text-xl font-semibold ">SHOP NOW</strong>
            <div className='w-[110px] h-[3px] bg-white'></div>
          </div>
          <img className="w-[794.56px] h-[598.94px] mr-[-100px]" src={banner_image} alt="banner"/>
        </div>
      </Container>
    </section>
  )
}

export default Banner
