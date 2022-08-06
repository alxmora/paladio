import './ItemDetailLoader.css'
import ItemCountLoader from '../ItemCountLoader/ItemCountLoader'

const ItemDetailLoader = () => {
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-7 col-md-7 mb-md-0 col-sm-12 col-12 mb-5">
                    <div className="itemDetailImageLoader loader"></div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex flex-column">
                    <h1 className="itemDetailTextLoader loader loader-h1"></h1>
                    <h4 className="itemDetailTextLoader loader loader-h4"></h4>
                    <p className="itemDetailTextLoader loader loader-p"></p>
                    <p className="itemDetailTextLoader loader loader-p"></p>
                    <div className="mt-auto">
                        <ItemCountLoader/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailLoader