import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import "../styles/nav.css";
import design from "../images/mc_white_transparent.png";

const Nav = () => {
    return (
        <div className="nav__container">
            <div className="nav-list__item--logo">
                <Link className="nav-list__link" to="/">
                    <img className="nav-list__logo-image" src={design} alt="logo" />
                </Link>
            </div>
            <div className="nav-list__container text-center">
                <ul className="nav-list">
                    <li className="nav-list__item nav-list__item--01">
                        <Link className="nav-list__link nav-list__link--01 btn btn-primary" to="/profile">
                            sign up / login
                        </Link>
                    </li>
                    {/* <li className="nav-list__item">
                        <Link className="nav-list__link nav-list__link--01 btn btn-primary" to="/login">
                            login
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Nav;
