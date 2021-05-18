import React, { useContext } from 'react';
// history
import { useHistory } from 'react-router-dom';
// recurso de paypal
import { PayPalButton } from 'react-paypal-button';
// styles
import '../styles/components/payment.css';
// appcontext
import AppContext from '../context/AppContext';


// handlesumtotal
import handleSumTotal  from '../utils/handleSumTotal';

const Payment = () => {

    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;

    const history = useHistory();

    const paypalOptions = {
        clientId: process.env.REACT_APP_CLIENT_ID_PAYPAL,
        intent: 'capture',
        currency: 'USD',
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePaymentSuccess = (data) => {
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }


    return (
        <div className="payment">
            <div className="payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="payment-item" key={item.title}>
                        <div className="payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {''} {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={() => console.log('start payment')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={error => console.log(error)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
            <div>
                sidebar
            </div>
        </div>
    )
}

export default Payment
