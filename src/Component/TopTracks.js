import React from 'react';
import PlayDark from "../images/play_dark.png";
import Loved from "../images/loved_heart.png";
import Img16 from "../images/16.png"
import Img14 from "../images/14.png"

import Img21 from "../images/21.png"
import Img15 from "../images/15.png"
import Music1 from "../Music/Indodana.mp3"



function TopTracks() {
   
        
        let audio = new Audio(Music1);
            
         function playSong(){
             audio.play();
         }
        
    


    return (
        <div className="tracks">
            <div className="tracksHead flex sbw">
                <h2>Top Tracks</h2>
                <p>Last 7 days</p>
            </div>
            <div className="tracksTb">
                <div className="tracksRow flex">
                    <p className="trackIndex">1</p>
                   
                    <img src={PlayDark} alt="" className="play_dark" onClick={() => playSong()}/>
                    <img src={Img16} alt="" className="sqrImg" />
                    <img src={Loved} alt="" className="loved_heart" />
                    <h4>All of Me</h4>
                    <p className="listeners">8,380 listeners</p>
                </div>
                <hr />
                <div className="tracksRow flex">
                    <p className="trackIndex">2</p>
                    <img src={PlayDark} alt="" className="play_dark" />
                    <img src={Img15} alt="" className="sqrImg" />
                    <img src={Loved} alt="" className="loved_heart" />
                    <h4>Conversations in the Dark</h4>
                    <p className="listeners">8,380</p>
                </div>
                <hr />
                <div className="tracksRow flex">
                    <p className="trackIndex">3</p>
                    <img src={PlayDark} alt="" className="play_dark" />
                    <img src={Img21} alt="" className="sqrImg" />
                    <img src={Loved} alt="" className="loved_heart" />
                    <h4>Wild (feat. Gary Clark Jr.)</h4>
                    <p className="listeners">380</p>
                </div>
                <hr />
                <div className="tracksRow flex">
                    <p className="trackIndex">4</p>
                    <img src={PlayDark} alt="" className="play_dark" />
                    <img src={Img16} alt="" className="sqrImg" />
                    <img src={Loved} alt="" className="loved_heart" />
                    <h4>Ordinary People</h4>
                    <p className="listeners">380</p>
                </div>
                <hr />
                <div className="tracksRow flex">
                    <p className="trackIndex">5</p>
                    <img src={PlayDark} alt="" className="play_dark" />
                    <img src={Img14} alt="" className="sqrImg" />
                    <img src={Loved} alt="" className="loved_heart" />
                    <h4>Love Me Now</h4>
                    <p className="listeners">430</p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default TopTracks;