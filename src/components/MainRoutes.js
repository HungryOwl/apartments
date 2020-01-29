import React from "react";
import { Switch, Route } from "react-router-dom";
import CardList from "./CardList/CardList";
import Apartment from "./Apartment/Apartment";

const MainRoutes = () => (
    <main>
        <Switch>
            <Route exact path='/'>
                <CardList title='Объекты недвижимости'/>
            </Route>

            <Route path="/apartment/:number">
                <Apartment />
            </Route>
        </Switch>
    </main>
);

export default MainRoutes;
