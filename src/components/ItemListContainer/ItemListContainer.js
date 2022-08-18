import './ItemListContainer.css'
import { useEffect, useState } from 'react'
// import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/index'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [noItemsFound, setNoItemsFount] = useState(false)
    
    const {categoryId} = useParams()


    useEffect(() => {
        const collectionRef = !categoryId ? 
        collection(db, 'products') : 
        query(collection(db, 'products'), where('category', '==', categoryId))

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        }).catch(error => {
            console.log(error)
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
            <div className='d-flex justify-content-center mt-5'>
                <div className="lds-dual-ring"></div>
            </div>
            </section>
        )
    }
    
}

export default ItemListContainer