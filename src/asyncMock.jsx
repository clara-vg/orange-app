export const products = [
    {
        id: "1",
        name: "Caminos",
        price: 100,
        category: "cuadros",
        img: "https://i.pinimg.com/564x/56/e6/c3/56e6c3c1e7be5aac8d524a7dc047d90e.jpg",
        stock: 5,
        description: "Descripcion de esta imagen"
    },
    {
        id: "2",
        name: "Senderos",
        price: 150,
        category: "cuadros",
        img: "https://i.pinimg.com/564x/af/5c/c7/af5cc7976e6ed4f6a709d0b23007e66c.jpg",
        stock: "5",
        description: "Descripcion de esta imagen"
    },
    {
        id: "3",
        name: "Relieves",
        price: 175,
        category: "cuadros",
        img: "https://i.pinimg.com/564x/52/d5/ad/52d5ad9ea3113a8a6dd8bebbfdb113e2.jpg",
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