import { useState, useEffect } from "react"

const MercadoLibre = () => {

    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     e.preventDefault()
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=auto')
    //     .then(resp => resp.json())
    //     .then(json => setProducts(json.results))
    // }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
        .then(resp => resp.json())
        .then(json => {
            setProducts(json.results)
        }) 
        .catch(err => {
            console.error(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    if(loading){
        return <h1>Cargando...</h1>
    }

    return (
        <>
            <h1>Mercado Libre</h1>
            <form onSubmit={handleOnSubmit}>
                <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Buscar</button>
            </form>
            <div>
                {products.map(prod => {
                    return (
                       <div key={prod.id}>
                            <p>{prod.title}</p>
                            <img src={prod.thumbnail}/>
                       </div> 
                    )
                })}
            </div>
        </>
    )
}

export default MercadoLibre