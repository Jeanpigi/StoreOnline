import React, { useContext } from 'react';
//styles
import '../styles/components/payment.css';
//appcontext
import AppContext from '../context/AppContext';
//recurso de paypal
import { PayPalButton } from 'react-paypal-button';
//history
import { useHistory } from 'react-router-dom';

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
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer: buyer,
                products: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <div className="payment">
            <div className="payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item) => (
                    <div className="payment-item" key={item.title}>
                        <div className="payement-element">
                            <h4>{item.title}</h4>
                            <span>$ {''} {item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
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
