import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import DualRingLoading from "../DualRingLoading/DualRingLoading"
import { Link, useNavigate } from "react-router-dom";
import './Checkout.css'
import { getDocsByIds, updateBatch, commitBatch, createDocument } from '../../services/firebase/firestore'
import {MdKeyboardBackspace} from 'react-icons/md'

const Checkout = () => {
    const [loadingOrder, setLoadingOrder] = useState(false)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const [nameInvalid, setNameInvalid] = useState(false)
    const [surnameInvalid, setSurnameInvalid] = useState(false)
    const [phoneInvalid, setPhoneInvalid] = useState(false)
    const [addressInvalid, setAddressInvalid] = useState(false)

    const { cart, getQuantity, total, clearCart } = useContext(CartContext)

    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const Swal = require('sweetalert2')

    const listItems = cart.map(item => {
        return <p key={item.id}><span>{item.name}</span><span>{currencyFormat(item.price * item.quantity)}</span></p>
    })

    const navigate = useNavigate()

    const totalQuantity = getQuantity()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name === '' || surname === '' || phone === '' || address === '') {
            name === '' && setNameInvalid(true)
            surname === '' && setSurnameInvalid(true)
            phone === '' && setPhoneInvalid(true)
            address === '' && setAddressInvalid(true)
        }
        else {
            generateOrder();
        }
    }

    const generateOrder = async () => {
        setLoadingOrder(true)
        try {
            const order = {
                buyerPerson: {
                    name: name,
                    surname: surname,
                    phone: phone,
                    address: address
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
            const ids = cart.map(item => item.id);
            getDocsByIds(ids).then(docs => {
                const outOfStock = []
                docs.forEach(doc => {
                    const itemStock = doc.stock
                    const cartItem = cart.find(item => item.id === doc.id)
                    const cartItemQuantity = cartItem.quantity
                    if (itemStock >= cartItemQuantity) {
                        updateBatch('products', doc.id, { stock : itemStock - cartItemQuantity})
                    }
                    else {
                        outOfStock.push({doc})
                    }
                })
    
                if (outOfStock.length === 0) {
                        commitBatch()
                        createDocument('orders', order).then(orderSuccess => {
                            Swal.fire(
                                '¡Orden generada correctamente!',
                                `El id de tu orden es: ${orderSuccess.id}`,
                                'success'
                            ).then(() => {
                                clearCart()
                                navigate('/')
                            })
                        }).catch(err => {
                            console.warn(err)
                        })
                }
                else {
                    console.warn('Hay productos que están fuera de stock')
                }
            })
        } catch (error) {
            console.warn(error)
        } finally {
            setLoadingOrder(false)
        }
    }
        return ( <>
            { 
                loadingOrder ?
                    <div className="text-center mt-5">
                        <div className="row d-flex flex-column justify-content-center align-items-center w-100">
                            <div className="col-4">
                                <h1>Checkout</h1>
                            </div>
                        </div>
                        <DualRingLoading />
                    </div>
                :
                    <div className="container">
                        <div className="row d-flex flex-row justify-content-center mt-lg-5 mt-0">
                            <div className="col-12 d-flex align-items-end justify-content-between">
                                <Link className="cm-link mt-5 ms-2" to={'/cart'}> <MdKeyboardBackspace className="me-4" />  Regresar</Link>
                                <h4>Checkout</h4>
                            </div>
                            <div className="col-lg-8 col-12 order">
                                <div className="orderTitle">
                                    Información de Orden
                                </div>
                                <div className="orderForm">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="name">Nombre</label> <input type="text" className={nameInvalid ? 'invalid' : ''} placeholder={nameInvalid ? 'Ingresa tu nombre' : 'Nombre'} name="name" value={name} onKeyDown={() => setNameInvalid(false)} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="surname">Apellido</label> <input type="text" className={surnameInvalid ? 'invalid' : ''} placeholder={surnameInvalid ? 'Ingresa tu apellido' : 'Apellido'} name="surname" value={surname} onKeyDown={() => setSurnameInvalid(false)} onChange={(e) => setSurname(e.target.value)} />
                                            </div>
                                        </div>
                                        <label htmlFor="phone">Teléfono</label> <input type="text" className={phoneInvalid ? 'invalid' : ''} placeholder={phoneInvalid ? 'Ingresa un teléfono' : 'Teléfono'} name="phone" value={phone} onKeyDown={() => setPhoneInvalid(false)} onChange={(e) => setPhone(e.target.value)} />
                                        <label htmlFor="address">Dirección</label> <input type="text" className={addressInvalid ? 'invalid' : ''} placeholder={addressInvalid ? 'Ingresa una dirección de entrega' : 'Dirección de entrega'} name="address" value={address} onKeyDown={() => setAddressInvalid(false)} onChange={(e) => setAddress(e.target.value)} />
                                        <button className="btnFinalizaCompra mt-4 w-100" type="submit">Generar orden</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 order transparent  mb-5">
                                <div className="orderTitle">
                                    Resumen de compra
                                </div>
                                <div className="orderForm">
                                    <ul className="mt-3">{listItems}</ul>
                                    <p className="totalOrder"> <span>Total:</span> <span>{currencyFormat(total)}</span> </p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            </>
        )
}

export default Checkout