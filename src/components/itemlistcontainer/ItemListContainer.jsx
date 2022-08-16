import { useState, useEffect } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../services/firebase/index"

const ItemListContainer = (props) => {
  const [products] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    getDocs(collection(db, 'products')).then(response => {
      const products = response.docs.map(doc => {
        const values = doc.data()
        console.log(values)
        return { id: doc.id, ...values}
      })
      console.log(products)
    })


    // const asyncFunction = categoryId ? getProductsByCategory : getProducts

    // asyncFunction(categoryId).then(response => {
    //   setProducts(response)
    // }).catch(error => {
    //   console.log(error)
    // }).finally(() => {
    //   setLoading(false)
    // })
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
