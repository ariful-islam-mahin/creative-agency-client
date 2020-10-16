import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import {useSpring, animated} from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Service = ({service}) => {
    const {title, description} = service;
    const [loggedInUser, setLoggedInUser, serviceData, setServiceData, isAdmin, setIsAdmin] = useContext(UserContext);
    
    const handleSelectService = data => {
        setServiceData(data);
    }
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className="col-md-4 mb-4">
            <animated.div
            style={{border: 0}}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            >
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <div style={{height:'320px'}} onClick={() => handleSelectService(service)} className="service-item d-flex flex-column justify-content-center p-4 rounded">
                        <img className="mx-auto mb-3" style={{width:'60px', borderRadius:'50%'}} src={`data:icon/jpeg;base64,${service.icon.img}`} alt=""/>
                        <h4 className="text-dark font-weight-bold">{title}</h4>
                        <p className="text-secondary">{description}</p>
                    </div>
                </Link>
            </animated.div>
        </div>
    );
};

export default Service;