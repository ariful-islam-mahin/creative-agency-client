import React from 'react';

const FooterForm = () => {
    return (
        <div>
            <form action="">
                <input type="email" className="form-control py-4" placeholder="Your email address" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                <br/>
                <input type="text" className="form-control py-4" placeholder="Your name/company's name" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                <br/>
                <textarea style={{height:'200px'}} type="text" className="form-control pt-3" placeholder="Your message" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></textarea>
                <br/>
                <button className="btn btn-dark px-5">Send</button> 
            </form>
        </div>
    );
};

export default FooterForm;