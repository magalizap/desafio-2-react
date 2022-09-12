import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { getProductos } from '../app/api'

export const ItemListContainer = ({saludo}) => {
  const [productos, setProductos] = useState([])
  useEffect(() =>{
    getProductos().then((data) =>{
      setProductos(data)
    })
  }, [])
  return (
    <>
      <h1>{saludo}</h1>
      <ItemList products={productos}/>
    </>

  )
}

export default ItemListContainer