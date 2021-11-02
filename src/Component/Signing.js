import React from "react";
import Img25 from "../images/25.png";
import {Link} from "react-router-dom";




function Signing(){
    return<>
       <div className="signBody flex sbw">
       <div className="signBody1">
                <h1>Create your account</h1>
                <div className="user">
                    <p>Username</p><br/>
                   <input type="text" value="" />
              </div>
              <div className="user">
                    <p>Email</p><br/>
                   <input type="text" value="" />
              </div>
              <div className="user">
                    <p>Password</p><br/>
                   <input type="password" value="" />
              </div>
              <div className="user">
                    <p>Confirm Password</p><br/>
                   <input type="password" value="" />
              </div>
              <div className="recap flex sbw" ><br/>
                   
                   <div className=" robot flex"><input type="checkbox" value="" />
                       <p>I'm not a robot</p>
                   </div>
                    <div className="captcha"><img src={Img25} alt="" /></div>
              </div>
              <div className="flex terms">
                      <input type="checkbox" value="" />
                       <p>I agree to the <Link to="/" style={{textDecoration:"none", color:"blue"}}>Terms Of Use </Link> 
                       and <Link to="/" style={{textDecoration:"none", color:"blue"}}> Privacy Policy</Link>  .</p>
              
              </div>
              <div>
                  <button>SIGN UP</button>
              </div><br/><br/>

             
                   <hr className="line"/>
             
              <div className="account">
                     
                       <p>Have an account? <Link to="/" style={{textDecoration:"none", color:"blue"}}>Log in</Link>.</p>
              
              </div>
        </div>

        <div className="signBody2">
                <div className=""> 
                    <h1>
                    Music Counts.
                    <br/>Track, Find and
                    <br/>Rediscover Music.
                    </h1>
                </div>

                <div className="learn">
                     
                       <p>Learn more about <Link to="/" style={{textDecoration:"none", color:"blue"}}>Last.Fm</Link>.</p>
              
              </div>
        </div>
       </div>
    
    
    </>

}


export default Signing;