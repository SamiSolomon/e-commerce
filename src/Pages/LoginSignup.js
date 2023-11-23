import React from 'react'

const LoginSignup = () => {
  return (
    <div className='h-screen bg-pink-100 p-12 text-center '>
        <div className=''>
        <div className='flex flex-col bg-white  ml-auto mr-auto w-[600px] h-[500px]'>
        <h1 className='p-1 font-bold text-2xl text-left mx-8 m-6'>Sign Up</h1>
        <div className='flex flex-col justify-center gap-6 text-center mb-3'>
          <input className='p-4 outline-none border border-slate-300 mx-8 ' type="text" placeholder='Your Name' />
          <input className='p-4 outline-none border border-slate-300 mx-8 ' type="email" placeholder='Email Address' />
          <input className='p-4 outline-none border border-slate-300  mx-8' type="password" placeholder='Password' />
        </div>
        <button className='bg-red-600 p-4 text-white mx-8 mb-3'>Continue</button>
        <p className='text-left mx-8 mb-1'>Already have an account <span className='text-pink-700'>login here</span> </p>
        <div className='flex flex-row mx-8 gap-1'>
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      </div>
    </div>
  )
}


export default LoginSignup;