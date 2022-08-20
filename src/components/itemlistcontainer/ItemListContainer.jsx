import { useState, useEffect } from "react"
import ItemList from "../itemList/ItemList"
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index"

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const collectionRef = !categoryId ? collection(db, 'products') : query(collection(db, 'products'), where('category', '==', categoryId))

    getDocs(collectionRef).then(response => {
      const products = response.docs.map(doc => {
        const values = doc.data()
        return { id: doc.id, ...values}
      })
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
