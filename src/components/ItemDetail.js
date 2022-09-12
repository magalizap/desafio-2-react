import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div  className='product'>
        <div className='width'>
          <img className='imgProduct' src={product.imagen} alt='img' />
        </div>
        <div className='width'>
          <h3>{product.nombre}</h3>
          <p className='description'>{product.descripcion}</p>
          <footer>{product.stock}</footer>
        </div>


    </div>
  )
}

export default ItemDetail