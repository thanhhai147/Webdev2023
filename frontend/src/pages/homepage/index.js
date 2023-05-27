import React from "react";
import "./assets/css/homepage.css";
import {motion} from "framer-motion";
import Foreground from "./components/foreground";
import Background from "./components/background"; 

export default function Homepage() {

    return (
        <motion.div exit={{opacity: 0}}>
            <div id="homepage" className="element-bg-color">
                <Background/>
                <Foreground/>
            </div>
        </motion.div>
    );
};