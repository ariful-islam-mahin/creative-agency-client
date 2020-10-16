import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const OrderForm = () => {
    const [loggedInUser, setLoggedInUser, serviceData, setServiceData, isAdmin, setIsAdmin] = useContext(UserContext);
    // const [file, setFile] = useState(null);

    // const handleFileChange = e => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile)
    // }

    const handleSubmit = (e) => {
        const orderInfo = {
            name: e.target.name.value,
            email: e.target.email.value,
            serviceName: serviceData.title,
            serviceDetail: serviceData.description,
            projectDetail: e.target.projectDetail.value,
            serviceIcon: serviceData.icon.img
        }

        fetch('https://mysterious-headland-87886.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderInfo)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('order successfully added')
            }
        })
        e.preventDefault()
    }

    return (
        <div className="py-5 w-50 px-3 dashboard">
            <h3 className="mb-4">Order</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" className="form-control py-4" defaultValue={loggedInUser.name} placeholder="Your name/company's name" required/>
                <br/>
                <input type="email" name="email" className="form-control py-4" defaultValue={loggedInUser.email} placeholder="Your email address" required/>
                <br/>
                <input type="text" name="serviceName" className="form-control py-4" defaultValue={serviceData.title} placeholder="Service name" required/>
                <br/>
                <textarea type="text" style={{height:'100px'}} name="projectDetail" className="form-control pt-3" placeholder="Project Details" required/>
                <br/>
                <div className="row d-flex justify-content-between px-3">
                    <input type="text" name="price" className="form-control mb-4 py-4 col-md-6 w-100" placeholder="Price" required/>

                    <div className="col-md-6">
                        <label htmlFor="files" className="btn btn-outline-success w-100"><FontAwesomeIcon icon={faCloudUploadAlt} />  Upload project file</label>
                        <input type="file"  name="picture" style={{display:'none'}} id="files" />
                    </div>
                </div>
                <button type="submit" className="btn btn-dark px-5 mt-3">Send</button>
            </form>
        </div>
    );
};

export default OrderForm;