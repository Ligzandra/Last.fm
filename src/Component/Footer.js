import React from 'react';

function Footer() {
    return (
        <footer>
            <div>
                <div className="footTop flex">
                    <div>
                        <h4>COMPANY</h4>
                        <p>About Last.fm</p>
                        <p>Contact Us</p>
                        <p>Jobs</p>
                    </div>
                    <div>
                        <h4>HELP</h4>
                        <p>Track My Music</p>
                        <p>Community Support</p>
                        <p>Community Guidelines</p>
                        <p>Help</p>
                    </div>
                    <div>
                        <h4>GOODIES</h4>
                        <p>Download Scrobbler</p>
                        <p>Developer API</p>
                        <p>Free Music Downloads</p>
                        <p>Merchandise</p>
                    </div>
                    <div>
                        <h4>ACCOUNT</h4>
                        <p>Sign Up</p>
                        <p>Log In</p>
                        <p>Suscribe</p>
                    </div>
                    <div>
                        <h4>FOLLOW US</h4>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>YouTube</p>
                    </div>

                </div>
              <hr/>
              <div className="LastFootSection">
              <div className="footDown flex sbw">
                       <div className="language flex gap">
                            <p className="light">English</p>
                            <p>Deutsch</p>
                            <p>Espanol</p>
                            <p>Francais</p>
                            <p>Italiano</p>
                            <p>Chinese </p>
                            <p>Polski </p>
                            <p>Português</p>
                            <p>Русский</p>
                            <p>Svenska </p>
                            <p>Türkçe </p>
                            <p>Japanese</p>
                       </div>
                       <div className="Audio light">
                           <p>Audioscrobbler</p>
                       </div>
                </div><br/>
                <div>
                        <div className="Time flex">
                            <p>Time zone:</p>
                            <p className="light"><b>Africa/Lagos</b></p>
                            
                        </div>
                       
                </div><br/>
                <div className="Copyright flex ">
                    <p>CBS Interactive</p>
                    <p>© 2021 Last.fm Ltd.</p>
                    <p>All rights reserved</p>
                    <p>.</p>
                    <p>Terms of Use </p>
                    <p>.</p>
                    <p>Privacy Policy</p>
                    <p>.</p>
                    <p>Legal Policies </p>
                    <p>.</p>
                    <p>California Privacy/Info We Collect</p>

                </div><br/>
                <div className="sell">
                    <p>Do Not Sell My Personal Information Jobs at ViacomCBS Last.fm Music</p>
                </div><br/>
                <div className="user">
                    <p>Some user-contributed text on this page is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply.</p>
                </div><br/>

              </div>
            </div>
        </footer>
    );
}

export default Footer;