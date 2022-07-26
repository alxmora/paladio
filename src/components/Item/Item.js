import './Item.css'

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

    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-2">
            <div className="itemCard">
                <div className='itemImageContainer'>
                    <div className='itemImage' style={itemImageStyle}></div>
                </div>
                <div className="itemInfo"> <span className="itemName">{item.name}</span> - <span className="itemDescription">{item.description}</span></div>
                <div className="itemPrice">{currencyFormat(item.price)} MXN <span className="itemStock">({item.stock} disponibles)</span> </div>
                <button className='itemDetails'>Ver detalles</button>
            </div>
        </div>
    )
}

export default Item