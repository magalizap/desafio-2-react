import React from 'react'
import ItemCount from './ItemCount'

export const ItemListContainer = ({saludo}) => {
  return (
    <>
      <h1>{saludo}</h1>
      <ItemCount stock={5} initial={1} onAdd={(valor)=>alert("Añadiste "+ valor + " productos al carrito")}/>
    </>

  )
}

export default ItemListContainer