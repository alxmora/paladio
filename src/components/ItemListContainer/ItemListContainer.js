import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products);
        })
    }, [])

    return (
        <section>
            <div className="center">
                <div className='heroContainer'>
                    <h1>{props.title}</h1>
                </div>
                <br />
            </div>
            <ItemList products={products} />
        </section>


    )
}

export default ItemListContainer