import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Service = ({service}) => {
    const {icon, title, description} = service;
    const [loggedInUser, setLoggedInUser, serviceData, setServiceData, isAdmin, setIsAdmin] = useContext(UserContext);
    
    const handleSelectService = data => {
        setServiceData(data);
    }

    console.log(isAdmin)
    return (
        <div className="col-md-4 mb-4">
            <Link to={isAdmin ? "/adminOrderList" : "/order"} style={{ textDecoration: 'none' }}>
                <div style={{height:'320px'}} onClick={() => handleSelectService(service)} className="service-item d-flex flex-column justify-content-center p-4 rounded">
                    <img className="mx-auto mb-3" style={{width:'60px', borderRadius:'50%'}} src={`data:icon/jpeg;base64,${service.icon.img}`} alt=""/>
                    <h4 className="text-dark font-weight-bold">{title}</h4>
                    <p className="text-secondary">{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Service;