import React from 'react'
import data_product from '../../Assets/data';
import Item from '../Item/item'

const Popular = () => {
  return (
    <div>
        <div className='p-4'>
            <h1 className='text-center text-4xl font-bold p-4 '>POPULAR IN WOMEN</h1> 
            <hr className='h-1.5 bg-black w-20 font-bold m-auto' />
        </div>
       <div className='grid grid-cols-4 gap-8 p-5 mb-8 mx-8'>
        {data_product.map((item,i) =>
         <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price ={item.old_price} />
        )}
       </div>
    </div>
  )
}

export default Popular;