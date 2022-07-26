export const products = [
    {
        id: "1",
        name: "Caminos",
        price: 100,
        category: "cuadros",
        img: "./images/cuadro1.png",
        stock: 5,
        description: "Descripcion de esta imagen"
    },
    {
        id: "2",
        name: "Senderos",
        price: 150,
        category: "cuadros",
        img: "./images/cuadro2.png",
        stock: "5",
        description: "Descripcion de esta imagen"
    },
    {
        id: "3",
        name: "Relieves",
        price: 175,
        category: "cuadros",
        img: "./images/cuadro3.png",
        stock: "5",
        description: "Descripcion de esta imagen"
    }
]

 export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}