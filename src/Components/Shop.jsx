import {useState, useEffect, useContext} from "react";
import {API_KEY, API_URL} from "../Config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {CartList} from "./CartList";
import {Alert} from "./Alert";
import {Checkout} from "./Checkout";
import {ModalWindow} from "./ModalWindow";
import {ShopContext} from "../Context";


export const Shop = () => {

    const {goods, setGoods, loading, order, isBasketShow, alertName, isCheckout, totalPrice} = useContext(ShopContext);

    useEffect(() => {
    }, [order])
    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                "Authorization": API_KEY
            }
        })
            .then((responce) => responce.json())
            .then((data) => {
                setGoods(data.featured)

            })
    }, [])

    return (
        <main className={"container content shop"}>
            <Cart quantity={order.length}/>
            {
                loading ? <Preloader/> : <GoodsList/>
            }
            {
                isBasketShow ?
                    <CartList goods={goods}/> : null
            }

            {
                alertName && <Alert/>
            }

            {

                isCheckout ? <Checkout totalPrice={totalPrice}/> : null
            }
            <ModalWindow/>
        </main>
    )


}