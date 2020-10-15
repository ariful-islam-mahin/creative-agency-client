import React from 'react';
import slack from '../../../../images/logos/slack.png';
import google from '../../../../images/logos/google.png';
import uber from '../../../../images/logos/uber.png';
import netflix from '../../../../images/logos/netflix.png';
import airbnb from '../../../../images/logos/airbnb.png';
import Client from '../Client/Client'
const clients = [
    {
        img:slack
    },
    {
        img:google
    },
    {
        img:uber
    },
    {
        img:netflix
    },
    {
        img:airbnb
    },
]
const Clients = () => {
    return (
        <section className="container my-5 py-5">
            <div className="row d-flex flex-wrap justify-content-around align-items-center  px-5">
                {
                    clients.map((client, idx) => <Client key={idx} client={client} />)
                }
            </div>
        </section>
    );
};

export default Clients;