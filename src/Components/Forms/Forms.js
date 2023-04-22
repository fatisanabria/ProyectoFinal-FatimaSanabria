import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Styles from "./Forms.module.css"
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, } from 'firebase/firestore';

function Form() {
    const { carrito, precioTotal,limpiarCarrito } = useContext(CartContext);

const navegar =useNavigate()

    const [nombre, setnombre] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [telefono, settelefono] = useState('');
    
    const order = {
        buyer: {
            nombre: nombre,
            email: email,
            telefono: telefono,
        },
        items: carrito.map(p => ({ id: p.id, nombre: p.nombre, precio: p.precio, cantidad: p.cantidad })),
        total: precioTotal(),
    }

    const generarOrden = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                toast.success(`¡La compra fue un exito!`)
                toast.info(`En breve seras redirigido...`)
                console.log(id);
                limpiarCarrito()    
                setTimeout(() => {
                    navegar("/")
                }, 3000);      
            });
    };


    const submit = (event) => {
        event.preventDefault();
        if(email === emailConfirmation){
        generarOrden()
    }else{
        toast.error("Correo incorrecto")
    }
    };

    
    return (
        <div className={`container  ${Styles.carta}`}>
            <ToastContainer/>
            <h1 className='mb-5'><strong>Ultimo paso: completa con tu informacion de contacto</strong></h1>
            <form className={`${Styles.contenido} `} onSubmit={submit}>
                <div className='mb-5'>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(event) => setnombre(event.target.value)}
                        required
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="emailConfirmation">Confirmacion de email:</label>
                    <input
                        id="emailConfirmacion"
                        type="email"
                        value={emailConfirmation}
                        onChange={(event) => setEmailConfirmation(event.target.value)}
                        required
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="telefono">telefono:</label>
                    <input
                        id="telefono"
                        type="tel"
                        value={telefono}
                        onChange={(event) => settelefono(event.target.value)}
                        required
                    />
                </div>
                <div className={``}>
                <button className={`btn btn-success fs-2`} type="submit">Comprar</button>
                </div>
            </form>
        </div>
    );
}
export default Form;