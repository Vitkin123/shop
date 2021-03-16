export const GoodsItem = (props) => {


    const {
        id,
        name,
        description,
        price,
        full_background,
        addItem

    } = props;


    return (
        <div className="card goods-item">
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
                    onClick={() => addItem({
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