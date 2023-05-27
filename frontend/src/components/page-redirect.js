import React from "react";
import { Redirect } from "react-router-dom";
import { useAppContext } from "../context/app-context";

export default function PageRedirect() {
    const { redirect } = useAppContext();
 
    return redirect && <Redirect push to={redirect} />
};