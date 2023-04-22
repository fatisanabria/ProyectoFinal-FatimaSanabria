import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error404 from './Components/Error404';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Checkout from './Components/Checkout/Checkout'
import { CartProvider } from './Components/Context/CartContext';
import Form from './Components/Forms/Forms';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path={'/'} exact element={<ItemListContainer/>}/>
                    <Route path={'/category/:id'} exact element={<ItemListContainer/>}/>
                    <Route path={'/producto/:id'} exact element={<ItemDetail/>}/>
                    <Route path={'/Cart'} exact element={<Checkout/>}/>
                    <Route path={'/Form'} exact element={<Form/>}/>
                    <Route path={'*'} exact element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}
export default App;
