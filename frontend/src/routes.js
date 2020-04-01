import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"

import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Photo from "./pages/Photo";
import PrivateRoute from "./utils/PrivateRoute";

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Register}/>
                <PrivateRoute path="/profile" component={Profile}/>
                <PrivateRoute path="/home" component={Home}/>
                <PrivateRoute path="/category" component={Category}/>
                <PrivateRoute path="/detail" component={Detail} />
                <PrivateRoute path="/photo" component={Photo} />
            </Switch>
        </BrowserRouter>
    )
}