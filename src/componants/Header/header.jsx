import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css"

export function Header_postview() {
    const navigate = useNavigate()
    return (
        <>
            <div className="header-main-container">
                <nav className="header border" >
                    <span className="app-icon"><i className="fa-brands fa-instagram"></i></span>
                    <span className="camera-icon"> <i className="fa-solid fa-camera" onClick={()=> navigate('post')}></i></span>
                </nav>
            </div>

        </>
    )
}

export function Header_post() {
    const navigate = useNavigate()
    return (
        <>
            <div className="header-main-container">
                <nav className="header border" >
                    <span className="app-icon"><i className="fa-brands fa-instagram"></i></span>
                    <span className="camera-icon"> <i className="fa-solid fa-camera" onClick={()=> navigate('/postviews')} ></i></span>
                </nav>
            </div>

        </>
    )
}