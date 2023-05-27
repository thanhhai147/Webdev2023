import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../context/app-context";

export default function AdminRoute ({children, ...rest}) {
    const { user } = useAppContext();

    return (
      <Route 
        {...rest}
        render={() => user ? (
          user.admin ? (
            children
          ) : (
            <Redirect push to="/permission-required" />
          )
        ) : (
          <Redirect push to="/login" />
        )}
      />
    )
};
