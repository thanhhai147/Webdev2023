import React, { useState, useContext, createContext, useEffect } from "react";
import { getUser, refreshTokens } from "../../services/auth.service";

const AppContext = createContext({});
const { Provider, Consumer } = AppContext;

const AppProvider = ({ children, ...props }) => {
    const [user, setUser] = useState(null);
    const [loadApp, setLoadApp] = useState(false);
    const [redirect, setRedirect] = useState(null);
    const [notification, setNotification] = useState(null);

    const getExistedUser = async () => {
        try {
            const response = await getUser();
            if(response.status === 200) {
                setUser(response.data.data);
            };
            setLoadApp(true);
        } catch(err) {
            if(err.response.status === 401) setLoadApp(true);
            if(err.response.status === 403) refreshAllTokens();
            if(err.response.status === 500) {
                setNotification({ type: "danger", message: "Lỗi hệ thống" });
                setLoadApp(true);
            };
        };
    };

    const refreshAllTokens = async () => {
        try {
            const response = await refreshTokens();
            if(response.status === 200) {
                setUser(response.data.data);
                setLoadApp(true);
            };
        } catch(err) {
            if(err.response.status === 401 || err.response.status === 403) {
                setRedirect("/login");
                setLoadApp(true);
            };
            if(err.response.status === 500) {
                setNotification({ type: "danger", message: "Lỗi hệ thống" });
                setLoadApp(true);
            };
        };
    };

    useEffect(() => {
        getExistedUser();
    }, []);

    const contextValue = { user, setUser, getExistedUser, loadApp, setLoadApp, redirect, setRedirect, notification, setNotification };

    return (
        <Provider value={contextValue} {...props}>
            {children}
        </Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if(context === undefined) {
        throw new Error(
            "UseAppContext must be called within AppProvider"
        );
    };

    return context;
};


export {
    AppProvider,
    Consumer as AppConsumer,
    useAppContext,
};