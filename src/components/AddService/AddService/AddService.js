import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import AddServiceForm from '../AddServiceForm/AddServiceForm';

const AddService = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100vh"}} className="col-md-9 bg-light">
                    <AddServiceForm/>
                </div>
            </div>
        </div>
    );
};

export default AddService;