import React from 'react';

const Client = ({client}) => {
    return (
        <div className="col-lg-2 col-sm-4 mb-5">
            <div className="d-flex justify-content-center">
                <img style={{height:'50px'}} src={client.img} alt=""/>
            </div>
        </div>
    );
};

export default Client;