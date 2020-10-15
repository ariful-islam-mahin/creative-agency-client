import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import UserOrderListItem from '../UserOrderListItem/UserOrderListItem';
import CircularProgress from '@material-ui/core/CircularProgress';

const UserOrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-headland-87886.herokuapp.com/orders', {
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
                        <div className="row">
                            {
                                orderList.length === 0 && <CircularProgress className="ml-4" />
                            }
                            {
                                orderList.map(order => <UserOrderListItem order={order}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOrderList;