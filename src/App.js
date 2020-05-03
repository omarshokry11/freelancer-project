import React from 'react';

import Navbars from './components/Navbar';
import Header from './components/Header';
import Cover from '-/components/Cover';

const App = () => {
    return (
        <div>
            <Navbars />
            <Header />
            <Cover />
        </div>
    );
};

export default App;