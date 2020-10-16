import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import AdminOrderList from '../AdminOrderList/AdminOrderList';
import UserOrderList from '../UserOrderList/UserOrderList'

const OrderList = () => {
    const [loggedInUser, setLoggedInUser, serviceData, setServiceData, isAdmin, setIsAdmin] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setOrderList(data)
        })
        .catch(err => {
          console.log(err)
        })
    }, [])

    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100%"}} className="col-md-9 bg-light py-5">
                    <div className="px-3">
                        <h3 className="mb-4">Service list</h3>
                            {
                                isAdmin ? <AdminOrderList orderList={orderList}/> : <UserOrderList orderList={orderList}/>
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;