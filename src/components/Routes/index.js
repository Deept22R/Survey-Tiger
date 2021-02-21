import React from 'react';
import { Router,Switch,Route } from 'react-router-dom';
import history from "../../history";
import Home from "../Home";
import CreateSurvey from "../CreateSurvey";
import TakeSurvey from "../TakeSurvey";
const Routes = () => {
    return (
        <Router history={history}>
           <Switch>
               <Route path="/create" exact>
                  <CreateSurvey />
               </Route>
               <Route path="./take" exact>
                <TakeSurvey />
               </Route>
               <Route path="/" exact>
                   <Home />
               </Route>
           </Switch>
        </Router>
    );
};

export default Routes;