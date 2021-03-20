import {useContext} from "react";
import {ShopContext} from "../Context";


export const CartItem = (props) => {

    const {
        id,
        name,
        price,
        quantity
    } = props;


    const {removeFromCart, decQuantity, incQuantity} = useContext(ShopContext);

    return (
        <li className="collection-item grey lighten-2">
            {name} <i
            className={"material-icons cart-quantity"}
            onClick={() => decQuantity(id)}>remove
        </i> x{quantity}
            <i
                className={"material-icons cart-quantity"}
                onClick={() => incQuantity(id)}>add
            </i> ={price * quantity}
            <span className="secondary-content" onClick={() => removeFromCart(id)}>
                <i className="material-icons cart-delete">close</i>
            </span>
        </li>
    )
}