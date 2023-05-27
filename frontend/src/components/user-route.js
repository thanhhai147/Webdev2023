import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../context/app-context";

export default function UserRoute ({children, ...rest}) {
    const { user } = useAppContext();

    return (
      <Route 
        {...rest}
        render={() => user ? (
          children
        ) : <Redirect push to="/login" />}
      />
    );
};