import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductUpdateState from "./context/AppState";
import Mission from './core/Mission'
const Routes = () => {
    return (
        <BrowserRouter>
            <ProductUpdateState>
                  <Route
                    path="/"
                    exact
                    component={Mission}
                />
            </ProductUpdateState>

        </BrowserRouter>
    );
};

export default Routes;
