import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import contactPagePicture from "../../../static/assets/img/auth/login.jpg";
// import contactPagePicture from "";
import contactPagePicture from "../../../static/assets/img/contact/20200131contact01.jpg";
import phoneNumber from "../../../static/assets/img/contact/phone-number.png";
import email from "../../../static/assets/img/contact/email.png";

export default function () {
    return (
        <div className="content-page-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">
                            <img
                                src={phoneNumber}
                                alt="phone number"
                                className="phoneNumber"
                            />
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">
                            <img src={email} alt="" className="email" />
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marked-alt" />
                        </div>

                        <div className="text">
                            2101 Church street <br />
                            Galveston, TX
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
