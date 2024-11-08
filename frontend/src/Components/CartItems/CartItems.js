import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Context';
import remove_icon from '../../Assets/cart_cross_icon.png'


function CartItems() {

    const {getTotalCartAmount ,all_product, cartItems,removeFromCart} =useContext(ShopContext)
  
    return (
    <div className='m-16'>
         <div className='flex gap-40 mb-3'>
            <p className=''>Produts</p>
            <p className=' mr-80'>Title</p>
            <p>price</p>
            <p>Quatinty</p>
            <p>Total</p>
            <p>Remove</p>
         </div>
         <hr  className='w-[1440px] border border-gray-400' />
         {all_product.map((e) => {
            if( cartItems[e.id] > 0){
                return (
                    <div key={e.id}>
                    <div className='flex gap-48'>
                        <img className='w-20 h-20 my-3' src={e.image} alt="" />
                        <p className='mt-9 -ml-8'>{e.name}</p>
                        <p className='mt-12'>{e.new_price}</p>
                        <p className='my-9 border border-gray-400 p-3 px-4  '>{cartItems[e.id]}</p>
                        <p className='mt-12'>{e.new_price * cartItems[e.id]} </p>
                        <img className='w-2 h-3 mt-12' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr className='w-[1440px] border border-gray-400' />
                 </div>
                )
            }
            return null;
         })}
         <div>
            <div className='flex '>
                <div>
                <h1 className='font-bold text-2xl  mb-16 mt-20'>cart Totals</h1>
                    <div className='flex justify-between my-4'>
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='flex justify-between  my-4'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className='flex justify-between gap-[400px] font-bold my-4'>
                        <p>total</p>
                        <p className=''>${getTotalCartAmount()}</p>
                    </div>
                    <button className='bg-orange-600 text-white p-4'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='ml-28 mt-20'>
                    <p className='text-gray-500'>If you have a promo code, Enter it here</p>
                    <div className='mt-4'>
                        <input className='p-3 w-80 bg-gray-100 outline-none' type="text" placeholder='promo code' />
                        <button className='py-3 w-32 px-4 bg-slate-950 text-white'>Submit</button>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default CartItems;