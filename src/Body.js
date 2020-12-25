import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Users from "./Users";
import CupboardsProvider from "./CupboardsProvider";

export default function Body() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/cupboards" component={CupboardsProvider} />
        </Switch>
    );
}
