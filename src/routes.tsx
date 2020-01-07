import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";

import FormLogin from "./components/FormLogin";
import ListPets from "./components/ListPets";

const PrivateRoute: any = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes: any = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={FormLogin} />
            <PrivateRoute path="/list-pets" component={ListPets} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;