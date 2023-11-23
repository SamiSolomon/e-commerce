import React from 'react'
import new_collection from '../../Assets/new_collections'
import Item from '../Item/item'


function NewCollections() {
  return (
    <div>
          <div className='p-4'>
            <h1 className='text-center text-4xl font-bold p-4 '>New Collections</h1> 
            <hr className='h-1.5 bg-black w-20 font-bold m-auto' />
           </div>
    <div className="grid grid-cols-4 gap-8 p-5 mb-8 mx-8"> 
        { new_collection.map((item,i)=> 
              <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
    )}
    </div>
    </div>
  )
}

export default NewCollections;