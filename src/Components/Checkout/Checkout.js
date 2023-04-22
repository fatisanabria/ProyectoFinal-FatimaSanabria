import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import ProductList from "./ProductList"
import Styles from "./Checkout.module.css"
import { Link } from "react-router-dom";


function Checkout (){
    const {carrito,precioTotal} = useContext(CartContext)
    return (
        <Container>
                {carrito.map(prod=>
                    <ProductList item={prod} key={prod.id} /> 
                )
                }
                <div className={`${Styles.carta} d-flex flex-column align-items-center`}>
                    <strong className="p-4 fs-1">Precio final: ${precioTotal()}</strong>
                    <Link to={"/Form"}><button className="btn btn-success mb-4">Comprar</button></Link>
                </div>
        </Container>
    )
}

export default Checkout 