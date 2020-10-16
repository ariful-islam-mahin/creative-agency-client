import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import OrderForm from '../OrderForm/OrderForm';

const Order = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100%"}} className="col-md-9 bg-light">
                    <OrderForm/>
                </div>
            </div>
        </div>
    );
};

export default Order;