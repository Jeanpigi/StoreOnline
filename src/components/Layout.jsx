import React from 'react';
//Components
import Header from './Header';
import Footer from './Footer';
//styles
import '../styles/components/layout.css';

const Layout = ({ children }) => {
    return (
        <div className="main">
            <Header />
                {children}
            <Footer />
        </div>
    )
}

export default Layout
