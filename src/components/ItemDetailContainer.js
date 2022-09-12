import React from 'react'
import { useEffect, useState } from 'react'
import { getItem } from '../app/api'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    useEffect(() =>{
        getItem().then((data) =>{
            setProducto(data)
        })
    },[])

  return (
    <>
        <ItemDetail product={producto}/>
    </>
  )
}

export default ItemDetailContainer