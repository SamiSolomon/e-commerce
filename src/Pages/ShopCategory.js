import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context';
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item/item';

const ShopCategory = (props) => {
  const {all_product } = useContext(ShopContext);

  return (
    <div>
      <img src={props.banner} alt="" />
      <div>
          <p>
               <span>Showing 1-12</span> out of 36 products
          </p>
          <div>
            sort by <img src={dropdown_icon} alt="dropdown icon" />
          </div>
      </div>
      <div>
      {all_product.filter(item => props.category === item.category).map((item, i) => (
    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
  ))}

      </div>
      <div>
        Explore More
      </div>
    </div>
  )
}


export default ShopCategory;