import { Link } from "react-router-dom"

const NotFoundException = () => {
    return (
        <div className="d-flex justify-content-center p-5 flex-column text-center align-items-center">
            <h1>Lo sentimos</h1>
            <br />
            <h3>No pudimos encontrar la página que buscabas</h3>
            <br />
            <img src='/images/gifs/notFound.webp' width={'30%'} alt="" />
            <br />
            <Link style={{color: '#333', fontSize: '1.5em'}} to={'/'}>Visita nuestra página inicial</Link>
        </div>

    )
}

export default NotFoundException