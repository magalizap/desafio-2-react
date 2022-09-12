import React from 'react'
import Item from './Item'



const ItemList = ({products}) => {

  return (
    <main className='alinearProductos'>
        {products.map((producto, id) => <Item key={id} producto = {producto}/>)}
    </main>
  )
}

export default ItemList