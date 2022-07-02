import setiniciacionacrilico from "./assets/set iniciacion acrilico.jpg";
import pintauñaspack  from "./assets/pintauñas pack.jpg";
import pintauñaspack2 from "./assets/pintauñas pack2.jpg";
import kitiniciaciomanicurista from "./assets/kitinciacionmanicurista.jpg";
import lamaparasecadouñas1 from "./assets/lamparasecadouñas1.jpg";
import lamaparasecadouñas2 from "./assets/lamparasecadouñas2.jpg";
import lamaparasecadouñas3 from "./assets/lamparasecadouñas3.jpg";
import pulidoraprofesional from "./assets/pulidoraprofesional.jpg";
import kitbasicoacrigel1 from "./assets/kitbasicoacrigel1.jpg";


const productos = [
    {id: '1', nombre: 'pack inic acrilico', precio: 1200, img: setiniciacionacrilico},
    {id: '2', nombre: 'pack pintauñas arcoiris', precio: 250, img: pintauñaspack},
    {id: '3', nombre: 'pack pintauñas nude', precio: 250, img: pintauñaspack2},
    {id: '4', nombre: 'kitinciacionmanicurista', precio: 5000, img: kitiniciaciomanicurista},
    {id: '5', nombre: 'lamparasecadouñas1', precio: 600, img: lamaparasecadouñas1},
    {id: '6', nombre: 'lamparasecadouñas2', precio: 700, img: lamaparasecadouñas2},
    {id: '7', nombre: 'lamparasecadouñas3', precio: 750, img: lamaparasecadouñas3},
    {id: '8', nombre: 'pulidoraprofesional', precio: 2500, img: pulidoraprofesional},
    {id: '9', nombre: 'kitbasicoacrigel1', precio: 500, img: kitbasicoacrigel1}
    
]

export const getProducto = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos)
        }, 500)
    })
}

export const getProductoByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}