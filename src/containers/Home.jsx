import React from 'react';
//initial state
import initialState from '../initialState';
//components
import Products from '../components/Products';
//helmet
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <Helmet>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@JeanPiBot" />
                <meta name="twitter:creator" content="@JeanPiBot" />
                <meta name="twitter:title" content="Jean Pierre Giovanni" />
                <meta name="twitter:description" content="Store online by Jp" />
                <meta
                    name="twitter:image"
                    content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta property="og:title" content="Platzi Conf Store" />
                <meta property="og:description" content="Platzi Conf Store" />
                <meta
                    property="og:image"
                    content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />
                <meta name="og:title" content="Jean Pierre Giovanni" />
                <meta name="og:description" content="Blog de JbearP" />
                <meta name="og:url" content="https://blog.jbearp.com" />
                <meta name="og:site_name" content="Jean Pierre Giovanni" />
                <meta name="og:locate" content="es_ES" />
                <meta name="og:type" content="article" />
                <meta name="fb:app_id" content="" />
            </Helmet>
            <Products products={initialState.products} />
        </>
    )
}

export default Home;
