import React, { useContext } from 'react';
// helmet
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// styles
import '../styles/components/checkout.css';
// appcontext
import AppContext from '../context/AppContext';
// handleSumTotal
import handleSumTotal from '../utils/handleSumTotal';


const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = product => () => {
        removeFromCart(product);
    };

    return (
        <>
            <Helmet>
                <title>Lista de pedidos: Store online</title>
            </Helmet>
            <div className="checkout">
                <div className="checkout-content">
                    {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
                    {cart.map((item) => (
                        <div className="checkout-item">
                            <div className="checkout-element">
                                <h4>{item.title}</h4>
                                <span>$ {item.price}</span>
                            </div>
                            <button type="button" onClick={handleRemove(item)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                    ))}
                </div>
                {cart.length > 0 && (
                    <div className="checkout-sidebar">
                        <h3>{`Precio Total: $ ${handleSumTotal(cart)}`}</h3>
                        <Link to="/checkout/information">
                            <button type="button">Continuar pedido</button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default Checkout;
