import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Login } from "./pages/login";
import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { InputMovies } from "./pages/inputMovies";
import { SearchMovies } from "./pages/searchMovies";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/input">
              <InputMovies />
            </Route>
            <Route exact path="/search">
              <SearchMovies />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
