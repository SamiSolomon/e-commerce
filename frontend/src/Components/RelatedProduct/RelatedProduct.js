import React from 'react'
import data_product from '../../Assets/data'
import Item from '../Item/item'

const RelatedProduct = () => {
  return (
    <div>
        <h1 className='text-center font-bold text-3xl'>Related Products</h1>
        <hr className='bg-black mx-auto w-[300px]  h-1 mb-16' />
        <div className='grid grid-cols-4 gap-8'>
            {data_product.map((item,i) =>
                <Item key={i} id={item.id} name={item.name} image={item.image} />                         
            )}
        </div>
    </div>
  )
}

export default RelatedProduct;