import './ItemCount.css'
import { useState, useEffect } from 'react'

const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        count < stock && setCount(count + 1);
    }

    const decrement = () => {
        count > 1 && setCount(count - 1);
    }

    return (
        <div>
            <div className="counter mt-2">
                <button onClick={decrement} className="counterIcon">-</button>
                <span className='counterQuantity'>{count}</span>
                <button onClick={increment} className="counterIcon">+</button>
            </div>
            <button onClick={() => onAdd(count)} className='btnAddItem mt-2'>Agregar a carrito</button>
        </div>
    )
}

export default ItemCount