import React, { useContext } from 'react';
//styles
import '../styles/components/success.css';
//appcontext
import AppContext  from '../context/AppContext';
//map
import Map from '../components/Map';
//hooks map
import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddress(buyer[0].address);

    return (
        <div className="success">
            <div className="success-content">
                <h2>{`${buyer.name}, gracias por tu compra`}</h2>
                <span>Tu pedido llegara en 3 días a tu dirección:</span>
                <div className="success-map">
                    <Map data={location}/>
                </div>
            </div>
        </div>
    )
}

export default Success;
