import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (

        <div className="center">
            <div className='heroContainer widthXl'>
                <div className='heroMessage'>
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer