import "./Cart.css";
import CartItem from "../cartitem/CartItem";

const Cart = ({products}) => {
    return (
        <div className="containerCard">
            {products.map(product => (<CartItem product={product} key={product.id}/>))}
        </div>
    )
}

export default Cart;