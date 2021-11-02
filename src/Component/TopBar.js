import React from "react";
import {Link} from "react-router-dom";






function TopBar(){
    return  <div>


        <div className="navbar">
            <div className="nav1">
               <div className="nav1a">
                   <img src="./img/img1.png" alt=""/>
               </div>
                <div className="nav1b">
                      <img src="./img/music control.PNG" alt=""/>
                </div>
            </div>
            <div className="nav2">
                <Link to="/index"><img src="./img/logo.PNG" alt=""/></Link>
            </div>
           
            <ul className="nav3">
                    <li> <div className="fasearch">
                    <span class="fa fa-search firsItem navbar-brand text-light" aria-hidden="true"></span>
                     </div></li>
                    <li><Link to="/signUp" style={{textDecoration:"none", color:"white"}}>Live</Link> </li>
                    <li><Link to="/john"  style={{textDecoration:"none", color:"white"}}>Music</Link> </li>
                    <li><Link to="/chart"  style={{textDecoration:"none", color:"white"}}>Charts</Link> </li>
                    <li><Link to="/signUp" style={{textDecoration:"none", color:"white"}} >Event</Link> </li>
                    <li><Link to="/features"  style={{textDecoration:"none", color:"white"}}>Features</Link> </li>
                    <li><Link to="/"  style={{textDecoration:"none", color:"white"}}>.</Link></li>
                    <li><Link to="/login"  style={{textDecoration:"none",color:"white"}}>Log in</Link></li>
                    <li><Link to="/signUp"  style={{textDecoration:"none", color:"white"}}><button className="" type="submit">SIGN UP</button></Link></li>
           </ul>
        </div>
        
          
    </div>

    
       
    
}

export default TopBar;