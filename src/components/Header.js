import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// styles
import '../styles/components/header.css';
// appcontext
import AppContext from '../context/AppContext';

const Header = () => {
    const { state } = useContext(AppContext);
    const { cart } = state;

    return (
        <div className="header">
            <h1 className="header-title">
                <Link to="/">Store online</Link>
            </h1>
            <div className="header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket" />
                </Link>
                {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
            </div>
        </div>
    )
}

export default Header;
