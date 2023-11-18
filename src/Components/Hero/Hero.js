import React from 'react'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import hero_image from '../../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='flex flex-row justify-between bg-pink-100 h-full'>
        <div className='font-bold mt-20 '>
            <h2 className='p-8 text-3xl'>New ARRIVALS ONLY</h2>
            <div>
                <div className='flex flex-row p-4'>
                   <p className='text-4xl py-16'>new</p>
                   <img src={hand_icon} alt='hand icon '/> 
                </div>
                <p className='text-4xl p-8'>collections</p>
                <p className='text-3xl p-8'>for everyone </p>
            </div>
            <div className='flex felx-row justify-center gap-2 bg-pink-600 rounded-lg p-2 m-6 '>
                <div className='text-lg '> Latest Collection </div>
                <img className=' ' src={arrow_icon } alt='arrow icon' />
            </div>
        </div>
        <div className='mt-8'>
            <img src={hero_image} alt='Hero ' />
        </div>
    </div>
  )
}

export default Hero;