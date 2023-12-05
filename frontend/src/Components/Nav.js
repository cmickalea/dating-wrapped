import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import "../styles/nav.css";
// import design from "../images/mc_white_transparent.png";

const Nav = () => {
    return (
        <div className="nav position-center">
            <div className="nav-menu">
                <i className="nav-menu-toggle"></i>
                <div className="nav-list__container text-center">
                    <ul className="nav-list">
                        {/* <li className="nav-list__item">
                            <Link className="nav-list__link nav-list__link--01" to="/">home</Link>
                        </li> */}
                        <li className="nav-list__item">
                            <Link className="nav-list__link nav-list__link--02" to="/register">add stats</Link>
                        </li>
                        <li className="nav-list__item">
                            <Link className="nav-list__link nav-list__link--03" to="/profile">see stats</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;