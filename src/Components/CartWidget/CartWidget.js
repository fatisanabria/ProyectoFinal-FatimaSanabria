import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CartContext } from "../Context/CartContext";

function CartWidget() {
    const {totalProd} = useContext(CartContext)

    return (
        <div className='d-flex align-items-center'>
            <p className='bg-body-tertiary rounded-circle px-2'>{totalProd()}</p>
            <div>
                <Link to={`/Cart`}><FontAwesomeIcon icon={faCartShopping}/></Link>
            </div>
        </div>
    )
}
export default CartWidget;