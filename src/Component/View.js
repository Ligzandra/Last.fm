import React from "react";



function View(props){
    return <>

              <div className="similarBubble">
                     <img src={props.image} alt="" />
                    <div className="simBub_p">{props.desc}</div>

                </div>
            

    </>
}

export default View;
