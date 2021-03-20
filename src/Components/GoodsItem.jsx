import {ShopContext} from "../Context";
import {useContext} from "react";


export const GoodsItem = (props) => {


    const {
        id,
        name,
        description,
        price,
        full_background


    } = props;

    const {addItemToCart} = useContext(ShopContext);

    return (
        <div className="card goods-item hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className={"btn"}
                    style={{backgroundColor: "#00ab6b", color: "black"}}
                    onClick={() => addItemToCart({
                        id,
                        name,
                        price
                    })}>Buy
                </button>
                <span className={"right"} style={{fontSize: "1.8rem"}}>{price} NIS</span>
            </div>
        </div>
    )


}