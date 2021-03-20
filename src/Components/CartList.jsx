import {CartItem} from "./CartItem";
import {useContext} from "react";
import {ShopContext} from "../Context";

export const CartList = (props) => {

    const {
        order = [],
        handleCartShow = Function.prototype,
        handleCheckoutShow
    }
        = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)

    return (
        <ul className="collection cart-list">
            <li className="collection-item" style={{backgroundColor: "#00ab6b", color: "black"}}>Cart</li>
            {
                order.length ? order.map((item) => {
                    return <CartItem
                        key={item.id}
                        {...item}
                    />
                }) : <li className="collection-item grey lighten-2">
                    Cart is empty
                </li>
            }
            <li className="collection-item" style={{backgroundColor: "#00ab6b", color: "black"}}>
                Total price {totalPrice} NIS
            </li>
            <li className="collection-item grey lighten-2">
                <button
                    className={"btn-small"}
                    style={{backgroundColor: "#00ab6b", color: "black"}}
                    onClick={() => handleCheckoutShow(totalPrice)}
                >Checkout
                </button>
            </li>
            <i className={"material-icons cart-close"} onClick={handleCartShow}>close</i>
        </ul>
    )
}