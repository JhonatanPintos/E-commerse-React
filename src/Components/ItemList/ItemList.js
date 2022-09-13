import Item from "../Item/Item"

const itemList = ({listProducts}) => {
    return(
        <>
        {listProducts.map((prod, i) => <Item key={`${prod.prduct}-${i}`} product={prod} />)}
        </>
    )
}

export default itemList