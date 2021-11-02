import React from "react";
import TopBar from "../Component/TopBar";
import BannerBar from "../Component/BannerBar";
import ArtistBackground from "../Component/ArtistBackground";
import Img21 from "../images/21.png";
import Img16 from "../images/16.png";
import Img18 from "../images/18.png";
import Img12 from "../images/12.png"
import Img13 from "../images/13.png"
import Img14 from "../images/14.png"
import Img17 from "../images/17.png"
import Img20 from "../images/20.png"
import Img111 from "../images/111.png"
import Footer from "../Component/Footer";
import TopTracks from "../Component/TopTracks";
import SimilarArt from "../Component/SimilarArt";
import View from "../Component/View";



function Index(){
      return <>
          <TopBar/>
          <BannerBar/>
          <div className="flex sbw">
             <ArtistBackground/>
             
             <div className="similar_artist">
                <div className="flex sbw">
                    <p className="similar_b"><b>Similar To</b></p>
                    <p className="simliar_p">View all artists</p>
                </div>
                <div className="flex"> 
                     <View
                        image={Img21}
                        desc="Jay-Z"
                     /> 
                    <View
                        image={Img16}
                        desc="Beey-Z"
                    />
                    <View
                        image={Img18}
                        desc="Alicia-Keys"
                    />
                 </div>
            </div>
          </div>
          <TopTracks/>
          <div className="simMain">
             <h3>Similar Artists</h3>
             <div className="simArt flex">
                <SimilarArt
                      image={Img12}
                      desp="Jay Z"
                      rate="2,616,995 listeners"
                />
                <SimilarArt
                       image={Img13}
                       desp="Beetyl"
                       rate="2,616,995 listeners"
                />
                <SimilarArt
                      image={Img14}
                      desp="Beey-Z"
                      rate="2,616,995 listeners"                
                />
                <SimilarArt
                      image={Img17}
                      desp="Tray-Z"
                      rate="2,616,995 listeners"                
                />
                <SimilarArt
                      image={Img20}
                      desp="Solo"
                      rate="2,616,995 listeners"                
                />
                <SimilarArt
                      image={Img111}
                      desp="Alicia-Keyz"
                      rate="2,616,995 listeners"                
                />
             </div>
             <p id="simAll"> View all similar artists</p>

          </div>
          
          <Footer/>

        </>
}



export default Index;