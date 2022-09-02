import campera from '../assets/img/campera-bordada.jpg'
import remera from '../assets/img/remera-gris.jpg'

const productos =[
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


export const getProductos = () =>{
    const task = new Promise((res, rej) =>{ 
        setTimeout(()=>{
            res(productos)
        },2000)
    })


    return task
}