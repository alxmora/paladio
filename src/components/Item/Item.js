import './Item.css'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ item }) => {

    const itemImageStyle = {
        background: `url(${item.img})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        cursor: 'pointer',
        width: '100%',
        height: '100%'
    }

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const handleOnAdd = (quantity) => {
        console.log(`La cantidad agregada es: ${quantity}`)
    }

    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-2">
            <div className="itemCard">
                <div className='itemImageContainer'>
                    <div className='itemImage' style={itemImageStyle}></div>
                </div>
                <div className="itemInfo">
                    <div style={{ minHeight: 80 }}>
                        <span className="itemName">{item.name}</span> - <span className="itemDescription">{item.description}</span>
                    </div>
                    <div className="itemPrice mb-3">{currencyFormat(item.price)} MXN <span className="itemStock">({item.stock} disponibles)</span> </div>
                    <button className='itemDetails'>Ver detalles</button>
                    <ItemCount stock={item.stock} onAdd={handleOnAdd} />
                </div>

            </div>
        </div>
    )
}

export default Item