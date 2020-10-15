import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import Navbar from '../Navbar/Navbar';
import '../../Home/Home.css'

const Header = () => {
    return (
        <div className="header pt-3 pb-5">
            <div className="container mb-5">
                <Navbar/>
                <MainHeader/>
            </div>
        </div>
    );
};

export default Header;