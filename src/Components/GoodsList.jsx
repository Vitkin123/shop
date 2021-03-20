import {GoodsItem} from "./GoodsItem";
import {useContext} from "react";
import {ShopContext} from "../Context";

export const GoodsList = () => {

    const {goods = []} = useContext(ShopContext);


    if (!goods.length) {
        return <h3>Nothing was found</h3>;
    }

    return (

        <div className={"goods"}>
            {goods.map((item) => {
                return <GoodsItem key={item.id} {...item}/>
            })}
        </div>

    )

}