import React from 'react';
//initial state
import initialState from '../initialState';
//components
import Products from '../components/Products';

const Home = () => {
    return (
        <Products products={initialState.products} />
    )
}

export default Home;
