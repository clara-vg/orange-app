import { useState, useEffect } from "react";
import ItemDetail from "../Itemdetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc,doc } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {

      getDoc(doc(db, 'products', productId)).then(response => {
        const values = response.data()
        const product = { id: response.id, ...values}

        setProduct(product)
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        setLoading(false)
      })
    }, [productId])

    if(loading) {
      return <h1>Cargando los productos...</h1>
    }

  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}
export default ItemDetailContainer