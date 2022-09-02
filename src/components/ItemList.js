import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getProductos } from '../app/api'


const ItemList = () => {
  const [productos, setProductos] = useState([])
  useEffect(() =>{
    getProductos().then((data) =>{
      setProductos(data)
    })
  }, [])

  return (
    <main className='alinearProductos'>
        {productos.map((producto, id) => <Item key={id} producto = {producto}/>)}
    </main>
  )
}

export default ItemList