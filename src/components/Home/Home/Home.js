import React from 'react';
import Clients from '../Clients/Clients/Clients';
import Feedback from '../Feedback/Feedback/Feedback';
import Footer from '../Footer/Footer/Footer';
import Header from '../Header/Header/Header';
import Services from '../Services/Services/Services';
import Works from '../Works/Works/Works';

const Home = () => {
    return (
        <div>
            <Header/>
            <Clients/>
            <Services/>
            <Works/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;