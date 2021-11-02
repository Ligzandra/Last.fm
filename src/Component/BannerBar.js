import React from "react";
import {Link} from "react-router-dom";






function BannerBar(){
    return <>
            <div className="bannerback">
                    <div className="bannertxt">
                        <div className="bannerTXThead"> 
                                <div className="TXTbody">
                                  <h1>JOHN LEGEND</h1>
                                </div>
                                <div className="TXTplay">
                                    <div className="TXTplaybox">
                                        <span class="fa fa-play"></span>
                                        <p>PLAY ARTIST</p>
                                    </div>
                                    <div className="TXTdots">
                                        <div className="dotsInner">
                                            <p >.</p>
                                            <p>.</p>
                                            <p>.</p>
                                        </div>
                                        
                                    </div>
                                    <div className="TXTlist">
                                        <div className="listInner">
                                        <Link to="/signUp" style={{textDecoration:"none",fontSize: "10px", color:"white"}}>Listeners</Link><br/>
                                        <Link to="/signUp" style={{textDecoration:"none",fontSize: "9px", color:"white"}}>2M</Link>
                                        </div>
                                    </div>
                                    <div className="TXTlist">
                                        <div className="listInner">
                                        <Link to="/signUp" style={{textDecoration:"none",fontSize: "9px", color:"white"}}>Scrobbles</Link><br/>
                                        <Link to="/signUp" style={{textDecoration:"none",fontSize: "9px", color:"white"}}>39.5M</Link>
                                        </div>
                                    </div>

                                </div>
                        </div>
                    </div>
                    <div className="bannercover" >
                        <div className="bannerinner">

                        </div>
                        
                    </div>
            </div>
        </>
}        
export default BannerBar;