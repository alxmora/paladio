import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div className='container mt-5 mb-5'>
            <div className='row'>
                {products.map(item => <Item key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default ItemList