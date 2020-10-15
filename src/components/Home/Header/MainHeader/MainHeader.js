import React from 'react';
import frame from '../../../../images/logos/Frame.png'

const MainHeader = () => {
    return (
        <div className="row d-flex justify-content-between align-items-center mt-4 pb-4">
            <div className="col-md-5">
                <h1 className="font-weight-bold">Let's Grow Your Brand To The Next Level</h1>
                <h6 className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam provident nihil velit natus veniam!</h6>
                <button className="btn btn-dark px-5">Hire us</button>
            </div>
            <div className="col-md-6">
                <img className="w-100" src={frame} alt=""/>
            </div>
        </div>
    );
};

export default MainHeader;