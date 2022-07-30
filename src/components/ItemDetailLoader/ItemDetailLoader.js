import './ItemDetailLoader.css'
import ItemCountLoader from '../ItemCountLoader/ItemCountLoader'

const ItemDetailLoader = () => {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                    <div className="itemDetailImageLoader loader"></div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <h1 className="itemDetailTextLoader loader loader-h1"></h1>
                    <h4 className="itemDetailTextLoader loader loader-h4"></h4>
                    <p className="itemDetailTextLoader loader loader-p"></p>
                    <p className="itemDetailTextLoader loader loader-p"></p>
                    <ItemCountLoader/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailLoader