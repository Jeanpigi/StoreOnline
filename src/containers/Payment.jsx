import React from 'react';
//styles
import '../styles/components/payment.css';

const Payment = () => {
    return (
        <div className="payment">
            <div className="payment-content">
                <h3>Resumen del pedido:</h3>
                <div className="payment-button">
                    boton de pago con Paypal
                </div>
            </div>
            <div>
                sidebar
            </div>
        </div>
    )
}

export default Payment
