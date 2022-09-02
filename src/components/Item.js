import React from 'react'

const item = ({producto}) => {

  return (
    <div className='card'>
       <img className='imgProductos' src= {producto.imagen} alt='imagen'></img>
       <h1 className='productoTitle'>{producto.nombre}</h1>
       <button className='botonProducto'>Ver detalle del producto</button>
       <footer className='footerProducto'>{producto.stock}</footer>
    </div>
  )
}

export default item