import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import NavBarCss from './NavBar.module.css'

function NavBar() {
    return (
        <header className={`container-fluid g-0`}>
            <div>
                <h1 className='text-center pt-5 pb-2 fw-bold fst-italic'>Merlina's</h1>
            </div>
            <nav className='navbar navbar-expand-lg d-flex justify-content-center'>
                <div className=''>
                    <button className='navbar-toggler btn' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarText'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' aria-current='page' to={'/'}>Inicio</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' to={`/category/Jerseys`}>Jersey</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' to={`/category/Camisas`}>Camisas</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' to={`/category/Calcetines`}>Calcetines</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' to={`/category/Vestidos`}>Vestidos</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' to={`/category/Camisetas`}>Camisetas</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' to={`/category/Pantalones`}>Pantalones</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' to={`/category/Faldas`}>Faldas</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link btn fst-italic' to={`/category/Chaquetas`}>Chaquetas</NavLink>
                            </li>
                        </ul>
                        <span className='navbar-text ms-4'>
                            <CartWidget />
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default NavBar;