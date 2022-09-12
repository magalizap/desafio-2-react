import campera from '../assets/img/campera-bordada.jpg'
import remera from '../assets/img/remera-gris.jpg'

const productos = [
    {
      nombre: "Remera bordada Talampaya",
      imagen: campera,
      stockDescripcion: "Stock disponible: 27",
      stock: 27
    },
    {
    nombre: "Campera bordada Caracas",
    imagen: remera, 
    stockDescripcion: "Stock disponible: 16",
    stock:16
    }
]

// Array de productos --> ItemListContainer
export const getProductos = () =>{
    const task = new Promise((res, rej) =>{ 
        setTimeout(()=>{
            res(productos)
        },2000)
    })


    return task
}

// un único objeto --> ItemDetailContainer

export const getItem = () => new Promise((res, rej) =>{
   setTimeout(() =>{
    res({
        nombre: "Remera bordada Talampaya",
        imagen: campera,
        stock: "Stock disponible: 27",
        descripcion: "Remera Bordada  Medidas (tomadas de frente a la prenda) Talle S: 48cm de axila a axila - 60cm de largo  Talle M: 50cm de axila a axila - 61cm de largo  Talle L/XL: 53cm de axila a axila - 62cm de largo  Corte suelto  - Manga Corta  Tela Algodón"
    })
   },2000)
})