import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemDetailLoader from '../ItemDetailLoader/ItemDetailLoader'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [notFound, setNotFound] = useState(false)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                !product ? setNotFound(true) : setProduct(product)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    if (product) {
        return (
            <div className='mt-5'>
                <ItemDetail product={product} />
            </div>
        )
    }
    else if(notFound){
        return (
            <div className='mt-5 d-flex align-content-center justify-content-center text-center flex-column'>
                <h1>Lo sentimos, no pudimos encontrar el artículo que buscas</h1>
                <br />
                <ItemListContainer title="Otros artículos" />
            </div>
        )
    }
    else {
        return (
            <div className='mt-5'>
                <ItemDetailLoader />
            </div>
        )
    }


}

export default ItemDetailContainer