export const Cart = (props) => {
    const {quantity = 0, hadleCartShow = Function.prototype} = props;
    return (
        <div className={"cart blue-darken-4"} onClick={hadleCartShow}>
            <i className={"material-icons"}>shopping_basket</i>
            {
                quantity ? <span className={"cart-quantity"}> {quantity} </span> : null
            }
        </div>
    )
}