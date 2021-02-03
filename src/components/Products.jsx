import React, { useContext } from 'react';
//components
import Product from './Product';
//styles
import '../styles/components/products.css';
//appcontext
import AppContext from '../context/AppContext';

const Products = () => {
    const { products, addToCart } = useContext(AppContext);

    const handleAddToCart = product => () => {
        addToCart(product)
    }

    return (
        <div className="products">
            <div className="products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    )
}

export default Products;
