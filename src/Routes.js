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
{/*         
            <Switch>
            <SearchState2>
            <Route path="/SearchFormUpgrade" exact component={SearchFormUpgrade} />
            </SearchState2>
            </Switch>
            
          
            <Switch>
                <SearchState>
                <Route path={["/", "/shop"]} exact component={Shop} />
                <Route path="/SearchForm" exact component={SearchForm} />
                </SearchState>
            </Switch>
 
                <Switch>    
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={PrivateArea}
                />
                
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />

                  <ProductState>
                  <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/product/popup/:productId" exact component={ProductPopup} />
                <Route path="/carousel/:productId" exact component={PicsCarousel} />
                  </ProductState>

                  
                <Route path="/cart" exact component={Cart} />
            </Switch> */}
        </BrowserRouter>
    );
};

export default Routes;
