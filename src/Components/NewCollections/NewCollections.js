import React from 'react'
import new_collection from '../../Assets/new_collections'
import Item from '../Item/item'


function NewCollections() {
  return (
    <div>
        <h1>NEW COLLECTIONS</h1>
    <hr />
    <div className="collections">
        { new_collection.map((item,i)=> 
              <Item key={i} id={item.id} name={item.name} image={item.image} />
    )}
    </div>
    </div>
  )
}

export default NewCollections;