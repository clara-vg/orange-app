import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(response => {
      setProducts(response)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId])

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
