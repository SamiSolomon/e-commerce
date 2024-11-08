import React, { useContext } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { ShopContext } from '../Context/Context';
import Item from '../Components/Item/item';

const ShopCategory = (props) => {
  const {all_product } = useContext(ShopContext);

  return (
    <div>
      <img className='mx-9' src={props.banner} alt="" />
      <div className='flex flex-row justify-between items-center mx-9 my-6'>
          <p>
               <span className='font-bold'>Showing 1-12</span> out of 36 products
          </p>
          <div className='flex flex-row  items-center border border-slate-400 rounded-full text p-1'>
           <p className='ml-1'>Sort by</p>
           <p className='-ml-1 mt-1'><RiArrowDropDownLine size={36} /> </p>
          </div>
      </div>
      <div className='grid grid-cols-4  gap-8 mx-8'>
      {all_product.filter(item => props.category === item.category).map((item,id) => (
                <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))}

      </div>
      <div className='mx-9'>
        Explore More
      </div>
    </div>
  )
}


export default ShopCategory;