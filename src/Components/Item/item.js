import React from 'react'
import { Link } from 'react-router-dom';
const item = (props) => {
  return (
    <div className='mb-10'>
      <Link to={`/product/${props.id}`}> <img onClick={()=> window.scrollTo(0,0)} src={props.image} alt="" /> </Link>
      <p>{props.name}</p>
    <div className="flex flex-row gap-20 mt-4">
       <div className="">
           ${props.new_price}
        </div>
        <div className="text-slate-400 line-through">
            ${props.old_price}
         </div>
    </div>
    </div>
  )
}

export default item;
