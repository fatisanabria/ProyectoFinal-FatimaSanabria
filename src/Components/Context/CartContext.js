import { createContext,useState } from "react";
export const CartContext = createContext(0);
export const CartProvider = ({children})=>{


const [cart,setCart] = useState([])




const addToList = (producto)=>{
    setCart((listaVieja)=>[...listaVieja,producto])
}

    return(
        <CartContext.Provider value={{addToList,cart}}>
            {children}
        </CartContext.Provider>
        )};