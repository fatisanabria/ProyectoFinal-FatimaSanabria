import React, { useContext } from 'react';
import Styles from './ItemDetail.module.css'
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import { Container, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { dataBase } from '../firestore';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../Context/CartContext';
import Error404 from "../Error404"

function ItemDetail() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const queryDb = dataBase;
        const queryDoc = doc(queryDb, 'productos', id);
        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.data(),cantidad:0 }))
    }, [id])

    const { añadirProd } = useContext(CartContext);


    const [contador, setContador] =useState(1)

    function resta (){
        setContador(contador - 1);
    }
    function suma (){
        setContador(contador + 1);
    }
 if(product.nombre === undefined){
        return(
            <Error404/>
        )
    }

    return (
        <Container className={`${Styles.carta}`}>
            <h1 className='pt-5'>{product.nombre}</h1>
            <section className='d-flex flex-row pt-5 m-5'>
                <div className=''>
                    <img className={`${Styles.img}`} src={product.imagen} />
                </div>
                <div className={`${Styles.informacion}`}>
                    <p>{product.descripcion}</p>
                    <p>Categoria: {product.categoria}</p>
                    <strong className='mb-4'>Precio: ${product.precio}</strong>
                    <strong>Stock: {product.stock}</strong>
                    <div className="d-flex flex-row justify-content-center border border-dark ms-5 mb-4">
                    <button disabled={ contador <= 1} onClick={resta} className="p-2 m-1 btn btn-dark">-</button>
                    <p className="p-2 m-1 ">{contador}</p>
                    <button disabled={contador >= product.stock } onClick={suma} className="p-2 m-1 btn btn-dark">+</button>
                </div>
                <Link to={"/"}><Button onClick={() => {
                        añadirProd(product,contador);
                    }} variant='success'>Añadir a carrito</Button></Link>
                </div>
            </section>
        </Container>
    );
}

export default ItemDetail;