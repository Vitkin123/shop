import {useContext} from "react";
import {ShopContext} from "../Context";

export const Checkout = () => {
    const {totalPrice} = useContext(ShopContext);

    return (
        <div className="row checkout">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        Total sum to pay {totalPrice}
                    </div>
                    <button className={"btn left pay-button"}>Pay!</button>
                </div>
            </form>
        </div>
    )
}