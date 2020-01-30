import React from "react";
import { Switch, Route } from "react-router-dom";
import CardList from "./CardList/CardList";
import Apartment from "./Apartment/Apartment";

const MainRoutes = () => (
    <main className="page-main">
        <Switch>
            <Route exact path="/">
                <CardList title="Объекты недвижимости"/>
            </Route>

            <Route path="/apartment/:number" component={Apartment}/>
        </Switch>
    </main>
);

export default MainRoutes;
