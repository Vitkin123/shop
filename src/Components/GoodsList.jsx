import {GoodsItem} from "./GoodsItem";

export const GoodsList = (props) => {

    const {goods = [], addItem = Function.prototype} = props;



    if (!goods.length) {
        return <h3>Nothing was found</h3>;
    }

    return (

        <div className={"goods"}>
            {goods.map((item) => {
                return <GoodsItem key={item.id} {...item} addItem={addItem}/>
            })}
        </div>

    )

}