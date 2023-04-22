import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, } from 'firebase/firestore';
import Styles from "./Forms.module.css"

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
        <div classnombre={` bg-dark ${Styles.carta}`}>
            <ToastContainer/>
            <form classnombre={`bg-dark ${Styles.contenido} `} onSubmit={submit}>
                <div>
                    <label htmlFor="nombre">nombre:</label>
                    <input
                        id="nombre"
                        type="text"
                        value={nombre}
                        onChange={(event) => setnombre(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emailConfirmation">Email Confirmation:</label>
                    <input
                        id="emailConfirmacion"
                        type="email"
                        value={emailConfirmation}
                        onChange={(event) => setEmailConfirmation(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="telefono">telefono:</label>
                    <input
                        id="telefono"
                        type="tel"
                        value={telefono}
                        onChange={(event) => settelefono(event.target.value)}
                        required
                    />
                </div>
                <div classnombre={``}>
                <button classnombre={`${Styles.boton} `} type="submit">submit</button>
                </div>
            </form>
        </div>
    );
}
export default Form;