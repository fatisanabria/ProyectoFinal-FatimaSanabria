import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";
import ProductList from "./ProductList"
import Styles from "./Checkout.module.css"


function Checkout (){
    const {productList} = useContext(CartContext)
    console.log(productList)
    return (
        <Container>
                {productList.map(prod=>
                    <ProductList item={prod} /> 
                )
                }
                <div className={`${Styles.carta} d-flex flex-column align-items-center`}>
                    <strong className="p-4 fs-1">Precio final: ${}</strong>
                    <button className="btn btn-success mb-4">Comprar</button>
                </div>
        </Container>
    )
}

export default Checkout 