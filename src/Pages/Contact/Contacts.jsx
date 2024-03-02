import React from 'react'
import Contact from './Contactss.css'

export default function Contacts() {
    return (
        <div>
            <div className="container text-center mt-5">
                <h1>Get In Touch.</h1>
                <div className="row m-3">
                    <div className="col-md-3 backgr">
                        <span>
                            <i class="fa-solid fa-location-dot"></i>
                            <p><b>Address</b></p>
                            <p>  Beed Maharashtra</p>
                        </span>
                    </div>
                    <div className="col-md-3 backgr">
                        <span>
                            <i class="fa-solid fa-envelope"></i>
                            <p><b>Email</b></p>
                            <p>samir.sayyad73501@gmail.com</p>
                        </span>
                    </div>
                    <div className="col-md-3 backgr">
                        <span>
                            <i class="fa-solid fa-phone"></i>
                            <p><b>Call</b></p>
                            <p> 8080223118</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12 ">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240086.3449727148!2d75.10427553924067!3d19.90968681964155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709208708853!5m2!1sen!2sin"
                            style={ { width: "1000px", height: "600px", border: "0" } }
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
