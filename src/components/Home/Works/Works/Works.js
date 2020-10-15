import React from 'react';
import WorksCarousel from '../WorksCarousel/WorksCarousel';

const Works = () => {
    return (
        <section className="px-5 pt-5 pb-1 works">
            <div className="container mt-5 text-center">
                <h2 className="font-weight-bold text-white mb-5">Here are some of <span className="item-text">our works</span></h2>
                <WorksCarousel/>
            </div>
        </section>
    );
};

export default Works;