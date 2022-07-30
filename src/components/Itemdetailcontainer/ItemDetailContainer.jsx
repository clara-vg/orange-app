import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";
import ItemDetail from "../Itemdetail/ItemDetail";

const ItemDetailContainer = (products) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct().then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        })
    }, [])

  return (
    <div>
        <ItemDetail products={product} />
    </div>
  )
}
export default ItemDetailContainer