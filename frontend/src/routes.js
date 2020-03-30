import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"

import Register from "./pages/Register";

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}