import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../Itemdetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        })
    }, [productId])

  return (
    <div>
        <ItemDetail {...product} />
    </div>
  )
}
export default ItemDetailContainer