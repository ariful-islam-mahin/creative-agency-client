import React from 'react';
import FooterForm from '../FooterForm/FooterForm';

const Footer = () => {
    return (
        <div className="footer py-5">
            <div className="container">
                <div className="row d-flex justify-content-between mb-5">
                    <div className="col-md-5 mb-5">
                        <h2 className="font-weight-bold mb-4">
                            Let us handle your project, professionally.
                        </h2>
                        <p>
                            With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <FooterForm/>
                    </div>
                </div>
                <div className="text-center pt-5">
                    <span>copyright Orange labs {(new Date()).getFullYear()}</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;