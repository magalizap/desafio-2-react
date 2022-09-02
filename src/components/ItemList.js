import React from 'react'
import campera from '../assets/img/campera-bordada.jpg'
import remera from '../assets/img/remera-gris.jpg'
import Item from './Item'

const productos = [
  {
    nombre: "Remera bordada Talampaya",
    imagen: campera,
    stock: "Stock disponible: 27"
  },
  {
    nombre: "Campera bordada Caracas",
    imagen: remera,
    stock: "Stock disponible: 16"
  }
]
const ItemList = () => {
  return (
    <main className='alinearProductos'>
        {productos.map(producto => <Item producto = {producto}/>)}
    </main>
  )
}

export default ItemList