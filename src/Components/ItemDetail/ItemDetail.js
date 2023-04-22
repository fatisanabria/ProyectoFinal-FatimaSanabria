import React, { useContext } from 'react';
import Styles from './ItemDetail.module.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { dataBase } from '../firestore';
import { doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../Context/CartContext';

function ItemDetail() {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const queryDb = dataBase;
        const queryDoc = doc(queryDb, 'productos', id);
        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.data() }))
    }, [id])

    const { addToList, productList } = useContext(CartContext);

    useEffect(() => {
        console.log("itemList has changed:", productList);
    }, [productList]);

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
                    <Button onClick={() => {
                        addToList(product);
                    }} variant='success'>Añadir a carrito</Button>
                </div>
            </section>
        </Container>
    );
}

export default ItemDetail;