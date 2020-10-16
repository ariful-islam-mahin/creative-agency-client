import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const UserOrderList = ({orderList}) => {
    // const {serviceIcon, serviceName, serviceDetail} = order;
    return (
        <div className="row">
            {
                orderList.length === 0 && <CircularProgress className="ml-4" />
            }
            {   
                orderList.map(order => {
                   return <div className="col-md-4 m-3 rounded bg-white">
                        <div className="px-2 py-3">
                            <img className="mx-auto mb-3" style={{width:'60px', borderRadius:'50%'}} src={`data:image/jpeg;base64,${order.serviceIcon}`} alt=""/>
                            <h4>{order.serviceName}</h4>
                            <p className="text-secondary">{order.serviceDetail}</p>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default UserOrderList;