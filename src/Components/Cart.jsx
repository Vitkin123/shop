import {useContext} from "react";
import {ShopContext} from "../Context";

export const Cart = () => {
    const {order, handleCartShow = Function.prototype} = useContext(ShopContext);

    const quantity = order.length;

    return (
        <div className={"cart blue-darken-4"} onClick={handleCartShow}>
            <i className={"material-icons"}>shopping_basket</i>
            {
                quantity ? <span className={"cart-quantity"}> {quantity} </span> : null
            }
        </div>
    )
}