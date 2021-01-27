import React from 'react';
//styles
import '../styles/components/success.css';

const Success = () => {
    return (
        <div className="success">
            <div className="success-content">
                <h2>Jp gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 días a tu dirección:</span>
                <div className="success-map">
                    Google maps
                </div>
            </div>
        </div>
    )
}

export default Success
