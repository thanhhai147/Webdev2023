import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AnimatePresence } from "framer-motion";

// pages
import Homepage from "./pages/homepage/index.js";
import Login from "./pages/login/index.js";
import Signup from "./pages/signup/index.js";
import MapView from "./pages/map-view/index.js";
import FashionShowcase from "./pages/fashion-showcase/index.js"
import Dashboard from "./pages/dashboard/index.js";
import PermissionRequired from "./pages/permission-required.js.js";
import Policy from "./pages/policy.js";

// components
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import Notification from "./components/notification/notification.js";
import UserRoute from "./components/user-route.js";
import AdminRoute from "./components/admin-route.js";
import PageRedirect from "./components/page-redirect.js";

// context provider
import { useAppContext } from "./context/app-context/index.js";

const App = () => {
  // useContext
  const { loadApp } = useAppContext();
  const location = useLocation();


  if(loadApp) {
    return (
      <div className="App"> 
        <PageRedirect/>
        <Notification/>
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route 
              exact 
              path={["/", "/homepage"]} 
              render={routeProps => (
                <Homepage {...routeProps} />
              )} 
            />
            <Route 
              path="/login"
              render={routeProps => (
                <Login {...routeProps} />
              )}
            />
            <Route 
              path="/signup"
              render={routeProps => (
                <Signup {...routeProps} />
              )}
            />
            <UserRoute path="/dashboard">
              <Dashboard />
            </UserRoute>
            <UserRoute path="/map-view">
              <MapView />
            </UserRoute>
            <UserRoute path="/fashion-showcase">
              <FashionShowcase />
            </UserRoute>
            <Route
              path={"/permission-required"}
              render={routeProps => (
                <PermissionRequired {...routeProps} />
              )}
            />
            <Route 
              path={"/policy"}
              render={routeProps => (
                <Policy {...routeProps} />
              )}
            />
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    )
  }
};

export default App;
