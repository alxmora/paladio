import { useEffect, useState, useContext } from "react"
import './CartElement.css'
import CartContext from "../../context/CartContext"
import { getProductById } from "../../services/firebase/firestore"

const CartElement = ({item}) => {
    const [itemInfo, setItemInfo] = useState();
    const [loading, setLoading] = useState(true);
    const {removeItem} = useContext(CartContext)
    useEffect(() => {
        getProductById(item.id).then(resp => {
            setItemInfo(resp)
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const handleRemoveItem = (e) => {
        removeItem(item.id)
    }

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <>
            {loading ?
                ''
            : 
            <div className="col-12 cartCard"> 
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-lg-1 col-md-2 col-sm-4 col-4">
                        <img className="itemImage" src={itemInfo.img} alt="" />
                    </div>
                    <div className="col-lg-11 col-md-10 col-sm-8 col-8">
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-sm-12 col-12 text-start">
                                <p className="fw-bolder">{itemInfo.name}</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-start">
                                <p className="fw-bolder">( {item.quantity} )</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-md-start text-end">
                                <p className="fw-bolder">{currencyFormat(item.quantity * item.price)}</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12 col-12 d-flex justify-content-end">
                                <button className="removeItem w-100" onClick={handleRemoveItem}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr />
            </div>
            }
        </>
    )
}

export default CartElement