import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = (({product}) => {
    const Swal = require('sweetalert2')
    const currencyFormat = (num) => {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const handleOnAdd = (quantity) => {
        Swal.fire(
            'Artículo agregado al carrito!',
            `Agregaste ${quantity} ${quantity > 1 ? 'piezas' : 'pieza'}`,
            'success'
        )
    }


    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                    <div className="itemDetailImage" style={{backgroundImage: `url(${product.img})`, width: '100%', height: '80vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}></div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <h1>{product.name}</h1>
                    <h4>{currencyFormat(product.price)} MXN</h4>
                    <hr />
                    <p>{product.description}</p>
                    <p>{product.stock > 0 ? `Disponibles (${product.stock})` : 'Sin existencias'}</p>
                    <ItemCount stock={product.stock} onAdd={handleOnAdd} />
                </div>
            </div>
        </div>
    )
})

export default ItemDetail