import React from 'react';
import { useHistory } from 'react-router-dom';
import agencyLogo from '../../../../images/logos/logo.png'

const Navbar = () => {
    const history = useHistory()
    const handleClick = (path) => {
        history.push(`/${path}`)
    }

    return (        
        <div className="d-flex flex-md-row flex-column justify-content-between pt-4 mb-5">
            <img className="mx-auto mx-md-0" style={{width:'150px'}} src={agencyLogo} alt=""/>
            <div className="d-flex flex-md-row flex-column mt-3">
                <button onClick={() => handleClick('home')} className="btn ml-2">Home</button>
                <button onClick={() => handleClick('portfolio')} className="btn ml-2">Our Portfolio</button>
                <button onClick={() => handleClick('team')} className="btn ml-2">Our Team</button>
                <button onClick={() => handleClick('contact')} className="btn ml-2">Contact Us</button>
                <button onClick={() => handleClick('login')} className="btn ml-2 btn-dark px-5">Login</button>
            </div>
        </div>
    );
};

export default Navbar;