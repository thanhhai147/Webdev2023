import React from "react";

export default function Spinner({ type, size = {width: "2rem", height: "2rem"}, color }) {
    return (
        <div className={`${type} ${color}`} style={size} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};