import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductUpdateState from "./context/AppState";
import ToDoFullForm from './core/ToDoFullForm'
const Routes = () => {
    return (
        <BrowserRouter>
            <ProductUpdateState>
                  <Route
                    path="/"
                    exact
                    component={ToDoFullForm}
                />
            </ProductUpdateState>

        </BrowserRouter>
    );
};

export default Routes;
