import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faListAlt, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import '../../Home/Home/Home.css'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser, serviceData, setServiceData, isAdmin, setIsAdmin] = useContext(UserContext);

    return (
        <div className="sidebar d-flex flex-column col-md-3 justify-content-between p-5">
            <ul className="list-unstyled">
                <li>
                    <Link to="orderList" className="text-dark">
                        <FontAwesomeIcon icon={faListAlt} /> <span className="ml-2">Service List</span> 
                    </Link>
                </li>
                {
                    isAdmin ? 
                    <div>
                        <li>
                            <Link to="/AddService" className="text-dark">
                                <FontAwesomeIcon icon={faPlus} /> <span className="ml-2">Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addAdmin" className="text-dark">
                                <FontAwesomeIcon icon={faUserPlus} /> <span className="ml-2">Make Admin</span>
                            </Link>
                        </li>
                    </div> :
                    <div>
                        <li>
                            <Link to="/order" className="text-dark">
                                <FontAwesomeIcon icon={faShoppingCart} /> <span className="ml-2">Order</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" className="text-dark">
                                <FontAwesomeIcon icon={faCommentAlt} /> <span className="ml-2">Review</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;