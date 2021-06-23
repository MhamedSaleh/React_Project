import React from 'react';
import {BrowserRouter  as Router, Route,Link} from 'react-router-dom';
import { routes } from "./Breadcrumbitems";
import './Breadcrumb.css';
class Breadcrumb  extends React.Component{
    render(){
        return(
          <div class="breadcrumb">
           {routes.map((route)=>(
                <Route 
                  key={route.path}
                  path={route.path}
                  component={route.main}
                />
              )
              )}
              </div>   
        )
    }
}
export default Breadcrumb 
