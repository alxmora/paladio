import './CartWidget.css'
import { Link } from 'react-router-dom'
const CartWidget = () => {

    return (
        <Link style={{ all: 'unset' }} to={'/cart'} className="d-flex align-items-center position-relative">
            <img src="/images/cartWidget.png" style={{ width: 20, height: 20, marginTop: -5, marginLeft: 50, marginRight: 10, cursor: 'pointer', position: 'relative' }} alt="" />
            <p className='cartCounter'>0</p>
        </Link>
    )
}

export default CartWidget