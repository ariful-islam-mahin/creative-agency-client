import React from 'react';

const UserOrderListItem = ({order}) => {
    const {serviceIcon, serviceName, serviceDetail} = order;

    return (
        <div className="col-md-4 m-3 rounded bg-white">
            <div className="px-2 py-3">
                <img className="mx-auto mb-3" style={{width:'60px', borderRadius:'50%'}} src={`data:image/jpeg;base64,${serviceIcon}`} alt=""/>
                <h4>{serviceName}</h4>
                <p className="text-secondary">{serviceDetail}</p>
            </div>
        </div>
    );
};

export default UserOrderListItem;