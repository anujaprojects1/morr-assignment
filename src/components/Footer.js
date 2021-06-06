import React, { Component } from 'react'
// import apple from '../images/download-on-the-app-store-logo-png-23.png';
// import google from '../images/get-it-on-google-play-google-play-badge-png-logos-23.png';
// import microsoft from '../images/5a902db47f96951c82922873.png';
import microsoft  from "../images/microsoft.png";
import appStore from "../images/appStore.png";
import googlePlay from "../images/googlePlay.png";
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    {/* eslint-disable-next-line */}
                    <p style={{fontSize:"1.1em"}}> <a>Home</a>|<a>Terms and Conditions</a>|<a>Privacy Policy</a>| <a>Collection Statement</a>| <a>Help</a>|<a>Manage Account </a></p>
                    <br />
                    <p>Copyright @ 2016 DEMO Streaming. All Rights Reserved.</p>
                    <div className="icons">
                        <div className="social">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-instagram"></i>
                        </div>
                        <div className="dwnld">
                <img src={appStore} alt="" className="appStore"/>
                <img src={googlePlay} alt="" className="googlePlay"/>
                <img src={microsoft} alt="" className="microsoft"/>
            </div>
                    </div>
                </footer>
                
            </div>
        )
    }
}
