import React from 'react';

const AddAdminForm = () => {

    const handleSubmit = (e) => {
        const admin = {
            email: e.target.email.value
        }
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(admin)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('admin added successfully')
            }
        })
        e.preventDefault()
    }
    return (
        <div className="py-5 w-50 px-4 dashboard">
            <h3 className="mb-4">Make Admin</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" className="form-control py-4" placeholder="Enter email address" required/>
                <button type="submit" className="btn btn-success px-5 mt-4">Submit</button>
            </form>
        </div>
    );
};

export default AddAdminForm;