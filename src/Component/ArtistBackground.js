import React from 'react';
import Img20 from "../images/20.png"
import Img15 from "../images/15.png"
import Img19 from "../images/19.png"




function ArtistBackground() {
    return (
        <div className="artist flex">
            <div className="artist_main flex">
                <div className="artist_left">
                    <div className="flex">
                        <div className="art_bubble">
                            <img src={Img20} alt="" />

                            <img src={Img15} alt="" id="left_bubble" />
                        </div>
                        <img src={Img19} alt="" id="mid_bubble" />
                        <div className="others">
                            <h2>Join others and track this artist</h2>
                            <p>Scrobble, find and rediscover music with a Last.fm account</p>
                        </div>

                    </div>
                    <p id="stephens">John Stephens (born December 28, 1978 in Springfield, Ohio), better known as
                        <br /> John Legend, is a Grammy award winning R&B singer-songwriter, multi-
                        <br />instrumentalist, poet and actor signed to Kanye West's G.O.O.D. Music label.
                        <br /> Prior to the release of his debut album Get Lifted in 2004, Legend's career
                        <br /> gained momentum through a series of successful collab… read more</p>
                    <div className="artist_btn flex">
                        <p>soul</p>
                        <p>rnb</p>
                        <p>neo-soul</p>
                        <p>singer-songwriter</p>
                        <p>john legend</p>
                        <p>+</p>
                        <p id="vall">View all tags</p>
                    </div>
                </div>
                <div className="artist_right">
                    <p id="sign">SIGN UP TO LAST.FM</p>
                    <div className="bornT flex">
                        <p><b>Born</b></p>
                        <p className="bornI">28 December 1978 (age 42)</p>
                    </div>
                    <div className="bornB flex">
                        <p><b>Born In</b></p>
                        <p className="bornI">Springfield, Clark County, Ohio, <br /> United States</p>
                    </div>
                </div>
            </div>


            {/* <div className="similar_artist">
                <div className="flex sbw">
                    <p><b>Similar To</b></p>
                    <p className="simliar_p">View all artists</p>
                </div> */}
                {/* <div className="similarBubble flex">
                    <img src={Img21} alt="" />
                    <img src={Img16} alt="" />
                    <img src={Img18} alt="" />
                </div> */}
            {/* </div> */}
        </div>
    );
}

export default ArtistBackground;