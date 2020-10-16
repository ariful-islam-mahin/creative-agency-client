import React from 'react';

const FeedbackList = ({feedback}) => {
    const {img, userName, companyName, description} = feedback;
    return (
        <div className="col-md-4 mb-4">
            <div className="border p-4 rounded">
                <div className="d-flex mb-3">
                    <img style={{width:'60px', height:'60px', borderRadius:'50%'}} src={img} alt=""/>
                    <div className="ml-3">
                        <h5 className="font-weight-bold">{userName}</h5>
                        <h6>{companyName}</h6>
                    </div>
                </div>
                <p className="text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default FeedbackList;