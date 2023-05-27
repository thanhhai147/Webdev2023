import React from "react";
import { AppProvider } from "./context/app-context";
import App from "./App";

export default function AppContext() {
    return (
        <AppProvider>
            <App />
        </AppProvider>
    )
};