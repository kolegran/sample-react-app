import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Users from "./Users";
import Cupboards from "./Cupboards";

export default function Body() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Cupboards} />
        </Switch>
    );
}
