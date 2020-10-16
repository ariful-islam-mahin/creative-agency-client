import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSubmit = (e) => {
        const review = {
            userName: e.target.userName.value,
            img: loggedInUser.img,
            companyName: e.target.companyName.value,
            description: e.target.description.value
        }
        fetch('https://mysterious-headland-87886.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('review added successfully')
            }
        })
        e.preventDefault()
    }
    return (
        <div className="py-5 px-4 w-50 dashboard">
            <h3 className="mb-4">Review</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" className="form-control py-4" defaultValue={loggedInUser.name} placeholder="Your name" required/>
                <br/>
                <input type="text" name="companyName" className="form-control py-4"  placeholder="Company's name, Designation" required/>
                <br/>
                <textarea type="text" style={{height:'100px'}} name="description" className="form-control pt-3" placeholder="Description" required/>
                <br/>
                <button type="submit" className="btn btn-dark px-5 ">Send</button>
            </form>
        </div>
    );
};

export default ReviewForm;