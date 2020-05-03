import React from 'react';

import Navbars from './components/Navbar';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <div>
                <Navbars />
            </div>
            <div>
                <Header />
            </div>
        </div>
    );
};

export default App;