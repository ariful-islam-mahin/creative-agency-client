import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Topbar from '../../Shared/Topbar/Topbar';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <div style={{overflowX:'hidden'}}>
            <Topbar/>
            <div className="row">
                <Sidebar/>
                <div style={{height:"100vh"}} className="col-md-9 bg-light">
                    <ReviewForm/>
                </div>
            </div>
        </div>
    );
};

export default Review;