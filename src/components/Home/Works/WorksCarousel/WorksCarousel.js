import React from 'react';
import carousel1 from '../../../../images/carousel-1.png';
import carousel2 from '../../../../images/carousel-2.png';
import carousel3 from '../../../../images/carousel-3.png';
import carousel4 from '../../../../images/carousel-4.png';
import carousel5 from '../../../../images/carousel-5.png';

const WorksCarousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide w-75 mx-auto pb-5" data-ride="carousel" data-interval="3000">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner pt-4 pb-5">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={carousel1} alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={carousel2} alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={carousel3} alt="Third slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={carousel4} alt="Fourth slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={carousel5} alt="Fifth slide"></img>
                </div>
            </div>
        </div>
    );
};

export default WorksCarousel;