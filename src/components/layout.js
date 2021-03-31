import React from 'react';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
