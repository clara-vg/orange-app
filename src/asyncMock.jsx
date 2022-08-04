export const products = [
    {
        id: "1",
        name: "Caminos",
        price: 100,
        category: "cuadros",
        img: "./images/cuadro1.png",
        stock: 5,
        description: "Una técnica clave para crear bellos paisajes de montañas es incluir profundidad. Los lentes gran angular se emplean para lograr esto. Acercarte a un elemento importante en la parte inferior del marco (como una roca, o una flor). El ojo se sentirá atraído por esa zona en la fotografía."
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
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}