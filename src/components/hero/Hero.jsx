import React from 'react'
import hero_img from "../../images/hero-image.png"
import { Button, Typography } from 'antd';

const { Title, Text } = Typography;

const Hero = () => {
  return (
    <section className='mt-[100px]' >
        <img className='w-full ' src={hero_img} alt="hero" />
        <div className="hero-text absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex flex-col items-center gap-4">
            <Title  style={{color: '#fff', fontSize: '60px'}}>Shop with us</Title>
            <Text className='text-xl   text-neutral-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Button type='primary'>Shop Now</Button>
        </div>
    </section>
  )
}

export default Hero
