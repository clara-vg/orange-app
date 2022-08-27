import { useState, useEffect } from "react"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firebase/Firestore"

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts(categoryId).then(products => {
      setProducts(products)
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
