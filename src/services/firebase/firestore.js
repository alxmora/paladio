import { getDocs, collection, query, where, getDoc, doc, addDoc, documentId, writeBatch } from 'firebase/firestore'
import { db } from '.'

let batchQueue = writeBatch(db)

export const getProductsByCategory = (categoryId) => {
    const collectionRef = !categoryId ?
        collection(db, 'products') :
        query(collection(db, 'products'), where('category', '==', categoryId))
    return getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
        })
        return productsAdapted
    }).catch(error => {
        return error
    })
}

export const getProductById = (productId) => {
    return getDoc(doc(db, 'products', productId)).then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data }
        return productAdapted
    }).catch(error => {
        return error
    })
}

export const getDocsByIds = (ids) => {
    const productsRef = collection(db, 'products')
    return getDocs(query(productsRef, where(documentId(), 'in', ids))).then(response => {
        const docsAdapted = response.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
        })
        return docsAdapted
    }).catch(error => {
        return error
    })
}

export const updateBatch = (collection, id, update) => {
    const docRef = doc(db, collection, id)
    batchQueue.update(docRef, update)
}

export const commitBatch = async () => {
    await batchQueue.commit()
    batchQueue = writeBatch(db)
}

export const createDocument = async (docName, doc) => {
    const docRef = collection(db, docName)
    const docSuccess = await addDoc(docRef, doc)
    return docSuccess
}