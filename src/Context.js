import {createContext} from "react";
import {reducer} from "./Reducer";
import {useReducer} from "react";

export const ShopContext = createContext();


const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: "",
    isCheckout: false,
    totalPrice: 0
}

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.closeAlert = () => {
        dispatch({type: "CLOSE_ALERT"});
    }
    value.removeFromCart = (itemId) => {
        dispatch({type: "REMOVE_FROM_CART", payload: {id: itemId}});
    }

    value.addItemToCart = (item) => {
        dispatch({type: "ADD_TO_CART", payload: item})
    }

    value.handleCartShow = () => {
        dispatch({type: "HANDLE_CART_SHOW"})
    }
    value.incQuantity = (itemId) => {
        dispatch({type: "INC_QUANTITY", payload: {itemId: itemId}})
    }

    value.decQuantity = (itemId) => {
        dispatch({type: "DEC_QUANTITY", payload: {itemId: itemId}})
    }
    value.handleCheckoutShow = (price) => {
        dispatch({type: "HANDLE_CHECKOUT_SHOW", payload: {price: price}})
    }

    value.setGoods = (data) => {
        dispatch({type: "SET_GOODS", payload: data})
    }


    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}