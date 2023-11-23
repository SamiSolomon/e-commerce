import React from 'react'

function NewsLetter() {
  return (
    <div className='bg-pink-100 flex flex-col items-center h-80 m-32'>
        <div className=''>
              <h1 className='font-bold text-5xl p-4 mt-4'>Get Exclusive Ofeers On Your Email</h1>
              <p className='ml-36 p-4 mb-2'>Subscribe to our newletter and stay updated</p>
        </div>
       <div className='relative'>
            <input className='w-[500px] -ml-16 p-4 border border-gray-400 outline-none rounded-full' type="email" placeholder='Your Email id' />
            <button className='bg-black text-white rounded-full py-4 px-10 relative -left-20'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter;