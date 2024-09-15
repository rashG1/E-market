import React from "react";
import { Link } from 'react-router-dom'; // For navigation between pages
import "./navigatebar.css";

export const Frame = () => {
    return (
        <div className="frame">
            <div className="div">
                <Link to="/" className="text-wrapper">HOME</Link>
                <Link to="/categories" className="text-wrapper-2">CATEGORIES</Link>
                <Link to="/trending" className="text-wrapper-3">TRENDING</Link>
                <Link to="/buy" className="text-wrapper-4">BUY</Link>
            </div>
            <div className="group">
                <div className="overlap-group">
                    <div className="text-wrapper-5">SIGN UP</div>
                </div>
            </div>
        </div>
    );
}

export default Frame;
