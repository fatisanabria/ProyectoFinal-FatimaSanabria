import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Styles from "./ProductList.module.css";

const contador = 1
function ProductList({ item }) {
    console.log(item)
    return (
        <>
        <Row className={`mt-5 ${Styles.carta}`}>
            <Card.Body>
                <Card.Title className={`fs-2 text-center align-middle mt-4 text-dark`}>{item.nombre}</Card.Title>
            </Card.Body>
            <Col className={`text-decoration-none ${Styles.posicion}` }>
                <div className={` m-2 mt-5 p-3 `} >
                    <Card.Img variant="top" src={item.imagen} className={`mt-4 ${Styles.imagen}`} />
                </div>
            </Col>
            <Col className={`${Styles.posicion} d-flex flex-column`}>
                <div className="d-flex flex-row justify-content-center border border-dark ms-5">
                    <button className="p-2 m-1 btn btn-dark">-</button>
                    <p className="p-2 m-1 ">{item.quantity}</p>
                    <button className="p-2 m-1 btn btn-dark">+</button>
                </div>
                <p className="text-secondary ms-5">Stock: {item.stock}</p>
            </Col>
            <Col className={`${Styles.posicion}`}>
                <div className={`${Styles.precio}`}>
                <strong className="fs-2">Precio: ${item.precio}</strong>
                <button className="btn btn-outline-danger m-2">Eliminar</button>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default ProductList