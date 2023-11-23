import React, { useContext } from 'react'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/Context';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} =useContext(ShopContext)
  return (
    <div className='flex flex-row justify-evenly gap-12 ml-2 mb-8'>
        <div className='flex flex-row  gap-8'>
            <div className='flex flex-col gap-5'>
                <img className="h-[135px] w-[200px]" src={product.image}alt="" />
                <img className="h-[135px] w-[200px]" src={product.image}alt="" />
                <img className="h-[135px] w-[200px]" src={product.image}alt="" />
                <img className="h-[135px] w-[200px]" src={product.image}alt="" />
            </div>
            <div >
                <img className='w-[800px] h-[600px] object-center' src={product.image} alt="" />
            </div>
        </div>
        <div>
           <h1 className='font-bold text-3xl mb-7'>{product.name}</h1>
           <div className='flex gap-1 mb-7 '>
            <img src={star_icon} alt="star icon " />
            <img src={star_icon} alt="star icon " />
            <img src={star_icon} alt="star icon " />
            <img src={star_icon} alt="star icon " />
            <img src={star_dull_icon} alt="star icon" />
            <p>(122)</p>
            </div> 
            <div className='flex gap-8 my-7 text-xl'>
                <div className='text-gray-400 line-through'>${product.old_price}</div>
                <div className='text-orange-600'>${product.new_price}</div>
            </div>
            <div className='mb-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad repellendus ea rerum, aliquid minus debitis eaque tenetur incidunt, sint dolor culpa sit necessitatibus natus ullam. Nulla alias odit a.
            </div>
            <div className='mb-7'>
                <h1 className='font-bold text-gray-500 text-xl mb-4'>Select size </h1>
                <div className='flex gap-3'>
                    <div className='bg-gray-100 px-4 py-2 text-center'>S</div>
                     <div className='bg-gray-100 px-4 py-2 text-center'>M</div>
                     <div className='bg-gray-100 px-4 py-2 text-center'>L</div>
                     <div className='bg-gray-100 px-4 py-2 text-center'>XL</div>
                     <div className='bg-gray-100 px-4 py-2 text-center'>XXL</div>
                </div>
            </div>
            <button className='bg-orange-600 text-white py-2 px-4 mb-7 cls' onClick={()=>addToCart(product.id)}>ADD TO CART </button>
            <p><span className='font-bold'>Category :</span>Women, T-Shirt, Crop top </p>
            <p><span className='font-bold'>Tags :</span>Modern,Latest</p>

        </div>

    </div>
  )
}

export default ProductDisplay;