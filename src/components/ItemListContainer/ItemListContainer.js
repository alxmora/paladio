import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        if(!categoryId){
            getProducts().then(products => {
                setProducts(products);
            })
        }
        else{
            getProductsByCategory(categoryId).then(products => {
                setProducts(products);
            })
        }
    }, [categoryId])

    if(products.length > 0){
        return (
            <section>
                <div className="center">
                    <div className='heroContainer'>
                        {categoryId ? <h1>{props.title} - {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1> : <h1>{props.title}</h1>}
                    </div>
                    <br />
                </div>
                <ItemList products={products} />
            </section>
        )
    }
    else{
        return (
            <section>
            <div className="center">
                <div className='heroContainer'>
                    {categoryId ? <h1>{props.title} - {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h1> : <h1>{props.title}</h1>}
                </div>
                <br />
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <div className="lds-dual-ring"></div>
            </div>
            </section>
        )
    }
    
}

export default ItemListContainer