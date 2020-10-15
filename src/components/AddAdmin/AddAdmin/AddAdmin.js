import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import AddAdminForm from '../AddAdminForm/AddAdminForm';

const AddAdmin = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100vh"}} className="col-md-9 bg-light">
                    <AddAdminForm/>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;