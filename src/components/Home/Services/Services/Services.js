import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import CircularProgress from '@material-ui/core/CircularProgress';


const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://mysterious-headland-87886.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="container text-center py-5 my-5">
            <h2 className="font-weight-bold mb-5">Provide awesome <span className="item-text">services</span></h2>
            <div className="row">
                {
                    services.length === 0 && <CircularProgress className="mx-auto" />
                }
                {
                    services.map((service, idx) => <Service key={idx} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;