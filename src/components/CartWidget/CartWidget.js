import './CartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const {getQuantity} = useContext(CartContext)
    const cartQuantity = getQuantity()
    return (
        <Link style={{ all: 'unset' }} to={'/cart'} className="d-flex align-items-center position-relative">
            <img src="/images/cartWidget.png" style={{ width: 20, height: 20, marginTop: -5, marginLeft: 50, marginRight: 10, cursor: 'pointer', position: 'relative' }} alt="" />
            <p className='cartCounter'>{cartQuantity}</p>
        </Link>
    )
}

export default CartWidget