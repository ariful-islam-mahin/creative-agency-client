import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import agencyLogo from '../../../images/logos/logo.png'

const Topbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="d-flex justify-content-between py-3 px-4">
            <img style={{width:'150px', height:'47px'}} src={agencyLogo} alt=""/>
            <h5>{loggedInUser.name}</h5>
        </div>
    );
};

export default Topbar;