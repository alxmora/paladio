import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemDetailLoader from '../ItemDetailLoader/ItemDetailLoader'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(product => {
                setProduct(product)
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
    else {
        return (
            <div className='mt-5'>
                <ItemDetailLoader />
            </div>
        )
    }


}

export default ItemDetailContainer