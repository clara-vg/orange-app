import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./CartItem.css"

const CartItem = ({product}) => {
    const { removeItem } = useContext(CartContext)
    const remove = (id) => {
        removeItem(id)
    }
    return (
        <div key={product.id} className="cardCart"> 
            <div className="cardCartDos">
            <h2 className="productoName">{product.name}</h2>
            <p className="info">Cantidad de Productos: {product.quantity} </p>
            <p className="info">Precio: ${product.price} </p>
            <p className="info">Total a pagar: $ {product.price * product.quantity} </p>
            </div>
            <div>
                <button className="botonDelCart" onClick={() => remove(product.id)}>
                    Eliminar del carrito de compras
                </button>
            </div>
        </div>
    )
}

export default CartItem;