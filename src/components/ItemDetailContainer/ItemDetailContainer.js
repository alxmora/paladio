import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemDetailLoader from '../ItemDetailLoader/ItemDetailLoader'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase'
const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [notFound, setNotFound] = useState(false)

    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(db, 'products', productId)).then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
            setNotFound(true)
        })
    }, [])

    if (notFound) {
        return (
            <div className='mt-5 d-flex align-content-center justify-content-center text-center flex-column'>
                <h1>Lo sentimos, no pudimos encontrar el artículo que buscas</h1>
                <br />
                <ItemListContainer title="Otros artículos" />
            </div>
        )
    }
    else{
        return <>
        {
        product ? 
            <div className='mt-5'>
                <ItemDetail product={product}/>
            </div>
        :
            <div className='mt-5'>
                <ItemDetailLoader />
            </div>
        }
        </>
    }


}

export default ItemDetailContainer