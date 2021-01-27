import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Containers or components
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
//styles
import '../styles/components/app.css';
//context y hooks
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />

                        <Route exact path="/checkout" component={Checkout} />

                        <Route exact path="/checkout/information" component={Information} />

                        <Route exact path="/checkout/payment" component={Payment} />

                        <Route exact path="/checkout/success" component={Success} />

                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;