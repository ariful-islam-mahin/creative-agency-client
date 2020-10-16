import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Topbar from '../Shared/Topbar/Topbar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100vh"}} className="col-md-9 bg-light">
                <h3 className="px-4 py-5">Welcome to {loggedInUser.name}</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;