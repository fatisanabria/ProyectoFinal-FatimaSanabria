import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";

function CartWidget() {
    const {productList} = useContext(CartContext)
    const contar = productList.length;
    return (
        <div className='d-flex align-items-center'>
            <p className='bg-body-tertiary rounded-circle px-2'>{contar}</p>
            <div>
                <Link to={`/Checkout`}><FontAwesomeIcon icon={faCartShopping}/></Link>
            </div>
        </div>
    )
}
export default CartWidget;