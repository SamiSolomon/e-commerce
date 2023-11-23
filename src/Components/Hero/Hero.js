import React from 'react'
import hand_icon from '../../Assets/hand_icon.png'
import arrow_icon from '../../Assets/arrow.png'
import hero_image from '../../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='flex flex-row justify-evenly bg-red-100 h-[900px]'>
        <div className='font-bold mt-20 mx-9'>
            <h2 className='p-8 text-3xl text-slate-700 '>New ARRIVALS ONLY</h2>
            <div>
                <div className='flex flex-row p-8 gap-3'>
                   <p className='text-6xl font-bold py-16'>new</p>
                   <img src={hand_icon} alt='hand icon '/> 
                </div>
                <p className='text-6xl font-bold px-8  py-2 '>collections</p>
                <p className='text-6xl font-bold px-8 py-2 '>for everyone </p>
            </div>
            <div className='flex felx-row justify-center gap-2 bg-pink-600 rounded-full p-3 ml-7 my-6 w-96'>
                <div className='text-2xl '> Latest Collection </div>
                <img className=' ' src={arrow_icon } alt='arrow icon' />
            </div>
        </div>
        <div className='my-auto justify-center'>
            <img className='w-[400px]' src={hero_image} alt='Hero ' />
        </div>
    </div>
  )
}

export default Hero;