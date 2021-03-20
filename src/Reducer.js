export function reducer(state, {type, payload}) {


    switch (type) {
        case "CLOSE_ALERT":
            return {
                ...state,
                alertName: ""
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                order: state.order.filter((el) => el.id !== payload.id)
            }
        case "HANDLE_CART_SHOW":
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case "ADD_TO_CART" : {
            const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id);

            let newOrder = null;

            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }

                newOrder = [...state.order, newItem]

            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        };
                    } else {
                        return orderItem;
                    }
                });
            }

            return {
                ...state,
                order: newOrder,
                alertName: payload.name
            }
        }
        case "INC_QUANTITY": {
            const newOrder = state.order.map((el) => {
                if (el.id === payload.itemId) {
                    const newQuantity = el.quantity + 1;
                    return {
                        ...el,
                        quantity: newQuantity
                    }
                } else {
                    return el;
                }
            })
            return {
                ...state,
                order: newOrder
            }
        }
        case "DEC_QUANTITY": {
            const newOrder = state.order.map((el) => {
                if (el.id === payload.itemId) {
                    const newQuantity = el.quantity - 1;
                    return {
                        ...el,
                        quantity: newQuantity >= 0 ? newQuantity : 0
                    }
                } else {
                    return el;
                }
            })
            return {
                ...state,
                order: newOrder
            }
        }
        case "HANDLE_CHECKOUT_SHOW": {
            return {
                ...state,
                isCheckout: !state.isCheckout,
                totalPrice: payload.price,
                isBasketShow: !state.isBasketShow
            }
        }
        case "SET_GOODS":
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        default:
            return state;
    }
}