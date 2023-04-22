import { createContext, useState } from "react";


export const CartContext = createContext(0)


export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const precioTotal =()=>{
        return carrito.reduce((prev,act) =>prev + act.cantidad * act.precio, 0);}
    const totalProd = () => carrito.reduce((counter, prod) => counter + prod.cantidad, 0);

    const limpiarCarrito = () => setCarrito([])

    const estaEnLista = (id) => carrito.find(item => item.id === id) ? true : false;

    const borrarItem = (id) => setCarrito(carrito.filter(item => item.id !== id))

    //Agregar items al carrito

    const añadirProd = (item, cantidad) => {
        if (estaEnLista(item.id)) {
            setCarrito(carrito.map(product => {
                return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product;
            }));
        } else {
            setCarrito([...carrito, { ...item, cantidad }])
        }

    }


    return (
        <CartContext.Provider value={{ totalProd,añadirProd, carrito,precioTotal,estaEnLista,borrarItem,limpiarCarrito }}>
            {children}
        </CartContext.Provider>
    )
};