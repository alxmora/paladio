import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import DualRingLoading from '../DualRingLoading/DualRingLoading'
import { getProductsByCategory } from '../../services/firebase/firestore'
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [noItemsFound, setNoItemsFound] = useState(false)
    
    const {categoryId} = useParams()


    useEffect(() => {
        getProductsByCategory(categoryId).then(resp => {
            setProducts(resp)
        }).catch(error => {
            console.log(error)
            setNoItemsFound(true)
        })
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
    else if(noItemsFound){
        return (
            <section>
                <div className="center">
                    <div className='heroContainer'>
                        <h1>No se encontraron resultados para la categoría {categoryId}</h1>
                    </div>
                </div>
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
            <DualRingLoading/>
            </section>
        )
    }
    
}

export default ItemListContainer