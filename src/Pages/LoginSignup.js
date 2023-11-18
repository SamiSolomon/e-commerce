import React from 'react'

const LoginSignup = () => {
  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <div>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p>Already have an account <span>login</span> </p>
        <div>
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}


export default LoginSignup;