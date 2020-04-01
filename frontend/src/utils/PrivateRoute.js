import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const currentUser = localStorage.getItem('token');
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default PrivateRoute
