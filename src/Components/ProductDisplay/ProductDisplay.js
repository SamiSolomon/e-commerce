import React, { useContext } from 'react'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/Context';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} =useContext(ShopContext)
  return (
    <div>
        <div>
            <div>
                <img src={product.image}alt="" />
                <img src={product.image}alt="" />
                <img src={product.image}alt="" />
                <img src={product.image}alt="" />
            </div>
            <div>
                <img src={product.image} alt="" />
            </div>
        </div>
        <div>
           <h1>{product.name}</h1>
           <div>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>{122}</p>
            </div> 
            <div>
                <div>${product.old_price}</div>
                <div>${product.new_price}</div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad repellendus ea rerum, aliquid minus debitis eaque tenetur incidunt, sint dolor culpa sit necessitatibus natus ullam. Nulla alias odit a.
            </div>
            <div>
                <h1>Select size </h1>
                <div>
                    <div>S</div>
                     <div>M</div>
                     <div>L</div>
                     <div>XL</div>
                     <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>addToCart(product.id)}>ADD TO CART </button>
            <p><span>Category:</span>Women, T-Shirt, Crop top </p>
            <p><span>Tags:</span>Modern,Latest</p>

        </div>

    </div>
  )
}

export default ProductDisplay;