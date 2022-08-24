import '../cartcontainer/CartContainer.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Cart from "../cart/Cart"

const CartContainer = () => {
    const { cart, getQuantity, getFinalPrice, limpiarCarrito} = useContext(CartContext)

const totalQuantity = getQuantity()
const total = getFinalPrice()


if(totalQuantity === 0) {
    return (
        <div className="cartGeneral">
            <h1 className="avisoCarroVacio">Tu carrito esta vacio...</h1>
            <div className="imag">
                <img src="images/camera.jpg" alt="camera-logo" />
            </div>
            <Link className="botonDelCart" to='/'> Agrega Items a tu carrito!</Link>
        </div>
    )
}

return (
    <div>
        <h1 className="tituloCarrito"> Este es el carrito de tu compra!</h1>
        <div>
            <Cart products={cart} />
        </div>
        <h3 className="totalFinal"> Total de tu compra: ${total} </h3>
        <div>
            <button className="btnCart" onClick={() => limpiarCarrito()}> Vaciar carrito</button>
            <Link to='/finalizarCompra' className="btnCart"> Comprar</Link>
        </div>
    </div>
)
};

export default CartContainer;
