import React from "react";
import "./index.css";
import Index from "./pages/index";
import signUp from "./pages/signUp";
import NotFound from "./pages/NotFound";

import {BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
      
         <BrowserRouter>
              <Switch>
                  <Route path="/" component={Index} exact/>
                  <Route path="/index" component={Index} /> 
                  <Route path="/signUp" component={signUp} />
                  <Route path="*">
                        <NotFound/>
                  </Route>
              </Switch>
         </BrowserRouter>
           
  );
}

export default App;