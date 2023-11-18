import React, { useContext } from 'react'
import { ShopContext } from '../../Context/Context';
import remove_icon from '../../Assets/cart_cross_icon.png'
function CartItems() {

    const {getTotalCartAmount ,all_product, cartItems,removeFromCart} =useContext(ShopContext)
  
    return (
    <div>
         <div>
            <p>Produts</p>
            <p>Title</p>
            <p>price</p>
            <p>Quatinty</p>
            <p>Total</p>
            <p>Remove</p>
         </div>
         <hr />
         {all_product.map((e) => {
            if( cartItems[e.id] > 0){
                return (
                    <div key={e.id}>
                    <div>
                        <img src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button>{cartItems[e.id]}</button>
                        <p>{e.new_price * cartItems[e.id]} </p>
                        <img src={remove_icon} onClick={()=>{removeFromCart(e.div)}} alt="" />
                    </div>
                    <hr />
                 </div>
                )
            }
            return null;
         })}
         <div>
            <div>
                <h1>cart Totals</h1>
                <div>
                    <div>
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div>
                        <p>total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div>
                    <p>If you have a promo code,Enter it here</p>
                    <div>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default CartItems;