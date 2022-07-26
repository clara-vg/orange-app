import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../itemList/ItemList"

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then(response => {
      setProducts(response)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  // const productosTransformados = products.map(product => (
  //   <li key={product.id}> {product.name} </li>
  //   ))

  if(loading) {
    return <h1> <b> Cargando productos... </b></h1>
  }
  
  return (
    <div>
      <h1><b>{props.label}</b></h1>
      <ItemList products={products} />  
    </div>
  )
}

export default ItemListContainer
