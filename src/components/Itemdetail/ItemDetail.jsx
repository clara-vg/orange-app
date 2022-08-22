import "../cartcontainer/CartContainer.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ( props ) => {
    const {id, name, img, description, price, stock} = props
    const [quantity, setQuantity] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        addItem({id, name, price, quantity})
      }
    
  return (
    <div className="grid place-items-center py-6">
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src= {img} alt="" />
            </figure>
        <div className="card-body">
            <h2 className="card-title text-gray-900 font-bold text-xl mb-2">
            {name} 
            </h2>
            <div className="badge badge-secondary">
                <p><b> 
                    Stock: {stock} 
                </b></p>
            </div>
            <p> {description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                        <strong> ${price} </strong>
                    </div> 
                    { quantity > 0
                         ? <Link to="/cart" className="btnCartDos"> Ir al carrito </Link> 
                         : <Counter stock={stock} onAdd={handleOnAdd} initial={quantityAdded} />}
                </div>
            </div>
        </div> 
    </div>
  );
}

export default ItemDetail

 