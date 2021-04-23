import React from "react";
import { Route, Redirect } from "react-router-dom";

import Dashboard from "../containers/Dashboard";

import AuthenticationService from "../auth/AuthenticationService"

export const ProtectedRoute = ({component:Component,...rest}) => {

  console.log(AuthenticationService.isUserAuthenticated())
	return (
			<Route {...rest} render={props=>{
				if(AuthenticationService.isUserAuthenticated()===true){

					return  <Dashboard {...props}><Component {...props}/></Dashboard >
				}else{
					return <Redirect to={{
						pathname:"/signin",
						state:{
							from: props.location
						}
					}}/>;
				}
			}}></Route>
	);
}