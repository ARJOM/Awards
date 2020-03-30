import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"

import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Detail from "./pages/Detail";

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/home" component={Home}/>
                <Route path="/category" component={Category}/>
                <Route path="/detail" component={Detail} />
            </Switch>
        </BrowserRouter>
    )
}