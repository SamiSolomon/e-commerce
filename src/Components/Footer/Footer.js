import React from 'react'
import footer_logo from '../../Assets/logo_big.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintester_icon from '../../Assets/pintester_icon.png'
import whatsapp_icon from '../../Assets/whatsapp_icon.png'


function Footer() {
  return (
    <div className=' flex flex-col m-16 items-center gap-6 h-screen'>
          <div className='flex flex-row'>
            <img  src={footer_logo} alt="footer" />
            <p className='font-bold text-4xl py-6 px-3'>SHOPPER</p>
          </div>
          <div>
            <ul className='flex flex-row gap-8'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
          </div>
        <div className='flex flex-row  gap-12'>
          <div>
               <img src={instagram_icon} alt='instagram' />
          </div>
          <div>
               <img src={pintester_icon} alt='Pintester' />
          </div>
          <div>
               <img src={whatsapp_icon} alt='whatApp' />
          </div>
        </div>
        <div>
            <hr  className='w-screen border border-gray-400' />
            <p className='text-center text-gray-400'>Copyright @2023 - All right Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer;