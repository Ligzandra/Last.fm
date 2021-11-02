import React from 'react';


function SimilarArt(props){
    return (
        <div className="simBub">
                   <img src={props.image} alt="" />
                   <h4>{props.desp}</h4>
                   <p>{props.rate}</p>
         </div>

        // <div className="simMain">
        //     <h3>Similar Artists</h3>
        //     <div className="simArt flex">
        //         <div className="simBub">
        //             <img src={Img12} alt="" />
        //             <h4>Jay Z</h4>
        //             <p>2,616,995 listeners</p>
        //         </div>
        //         <div className="simBub">
        //             <img src={Img13} alt="" />
        //             <h4>Beey T</h4>
        //             <p>2,616,995 listeners</p>
        //         </div>
        //         <div className="simBub">
        //             <img src={Img17} alt="" />
        //             <h4>Solo</h4>
        //             <p>2,616,995 listeners</p>
        //         </div>
        //         <div className="simBub">
        //             <img src={Img20} alt="" />
        //             <h4>Tray Songz</h4>
        //             <p>2,616,995 listeners</p>
        //         </div>
        //         <div className="simBub">
        //             <img src={Img111} alt="" />
        //             <h4>Alicia Keys</h4>
        //             <p>2,616,995 listeners</p>
        //         </div>
        //         <div className="simBub">
        //             <img src={Img14} alt="" />
        //             <h4>Alicia Keys</h4>
        //             <p>2,616,995 listeners</p>
        //         </div>
        //     </div>
        //     <p id="simAll"> View all similar artists</p>
        // </div>
    );
}

export default SimilarArt;