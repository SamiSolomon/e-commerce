import React from 'react'
import exclusive_image from '../../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='m-48' >   
    <div className='flex flex-row justify-evenly bg-pink-100'>
     <div className=" flex flex-col justify-center items-center">
      <div className='align-left '>
      <h1 className='font-bold text-6xl p-3'>Exclusive</h1>
       <h1 className='font-bold text-6xl p-3'>Offers For You</h1>
       <p className='font-bold p-3'>ONLY ON BEST SELLERS PRODUCTS</p>
       <button className='bg-red-400 rounded-full py-2 px-4 m-3'>Check Now</button>
      </div>
    
     </div>
       <div className="offers-right">
               <img src={exclusive_image} alt="Exclusive " />
        </div>
    </div>
    </div>
  )
}

export default Offers;