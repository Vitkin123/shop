import {CartItem} from "./CartItem";

export const CartList = (props) => {

    const {
        order = [],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        decQuantity,
        incQuantity
    }
        = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)

    return (
        <ul className="collection cart-list">
            <li className="collection-item active">Cart</li>
            {
                order.length ? order.map((item) => {
                    return <CartItem
                        key={item.id}
                        {...item}
                        removeFromCart={removeFromCart}
                        decQuantity={decQuantity}
                        incQuantity={incQuantity}

                    />
                }) : <li className="collection-item">
                    Cart is empty
                </li>
            }
            <li className="collection-item active">Total price {totalPrice} NIS</li>
            <li className="collection-item">
                <button className={"btn-small"}>Checkout</button>
            </li>
            <i className={"material-icons cart-close"} onClick={handleCartShow}>close</i>
        </ul>
    )
}