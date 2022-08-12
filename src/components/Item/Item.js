import './Item.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Item = ({ item }) => {
    
    const [url, setUrl] = useState(item.img)

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-2">
            <div className="itemCard">
                <div className='itemImageContainer'>
                    <div className='itemImage' style={{
                        background: `url(${url}) 50% 50% / cover`, 
                        cursor: 'pointer',
                        width: '100%',
                        height: '100%'
                    }} 
                    onMouseEnter={() => setUrl(item.hover)}
                    onMouseLeave={() => setUrl(item.img)}></div>
                </div>
                <div className="itemInfo">
                    <div>
                        <span className="itemName">{item.name}</span>
                    </div>
                    <div className="itemPrice mb-3">{currencyFormat(item.price)} MXN</div>
                    <Link to={`/detail/${item.id}`} className='btn itemDetails'>Ver detalles</Link>
                </div>
            </div>
        </div>
    )
}

export default Item