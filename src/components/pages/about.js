import React, { Component } from "react";
import aboutImg from "../../../static/assets/img/about/about_img.jpg";
// import aboutImg from "http://www.themarketingsage.com/wp-content/uploads/2015/08/about-me-leon-severan-we-buy-houses.jpg";

export default function () {
    return (
        <div className="about-page-wrapper">
            <div className="content-page-wrapper">
                <div
                    className="left-column about-image"
                    style={{
                        background: "url(" + aboutImg + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* <img src={aboutImg} alt="Oleg's picture" /> */}
                </div>

                <div className="right-column">
                    <div className="about-me">
                        <p>
                            Hello! <br />
                            I'm a front end developer that aims to creat a
                            beautiful web applications. As person who worked in
                            service industry I have numerus soft skills and
                            constantly improving my tech skills. Besides web
                            development I'm interested in network engineering,
                            microcontrollers and automatization (online and
                            offline). I'm very open minded and ready to learn
                            new skills!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
