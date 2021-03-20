import {useEffect, useContext} from "react";
import {ShopContext} from "../Context";


export const Alert = () => {

    const {alertName, closeAlert = Function.prototype} = useContext(ShopContext);
    useEffect(() => {

        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId);
        }
    }, [alertName])
    return (
        <div id={"toast-container"}>
            <div className={"toast"}> {alertName} was added to cart</div>
        </div>
    )
}