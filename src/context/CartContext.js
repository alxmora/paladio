import { useState, createContext } from "react"

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (itemToAdd) => {
        if(!isInCart(itemToAdd.id)) {
            setCart([...cart, itemToAdd])
        }else{
            const cartUpdated = cart.map(item => {
                if(item.id === itemToAdd.id){
                    const itemUpdated = {
                        ...item,
                        quantity: itemToAdd.quantity
                    }
                    return itemUpdated
                } else{
                    return item
                }
            })
            setCart(cartUpdated)
        }
    }

    const getQuantityById = (id) => {
        const item = cart.find(item => item.id === id)
        return item?.quantity
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id)
    }

    const getQuantity = () => {
        let cant = 0
        cart.forEach(item => {
            cant += item.quantity
        })
        return cant
    }

    return (
      <CartContext.Provider value={{cart, addItem, getQuantity, isInCart, removeItem, getQuantityById, clearCart}}>
        {children}
      </CartContext.Provider>
    )
}

export default CartContext