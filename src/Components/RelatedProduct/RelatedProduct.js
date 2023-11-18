import React from 'react'
import data_product from '../../Assets/data'
import Item from '../Item/item'

const RelatedProduct = () => {
  return (
    <div>
        <h1>Related Products</h1>
        <hr />
        <div>
            {data_product.map((item,i) =>
                <Item key={i} id={item.id} name={item.name} image={item.image} />                         
            )}
        </div>
    </div>
  )
}

export default RelatedProduct;