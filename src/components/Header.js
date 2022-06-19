import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h2 onClick={() => navigate("/")} className="head-text">
                Alexander
            </h2>
            <button>menu</button>
        </div>
    );
};
