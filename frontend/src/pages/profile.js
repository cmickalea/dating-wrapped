import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Components/Auth";
import "../styles/register.css";

const Profile = () => {
    return (
        <div className="profile__container">
            <Auth />
            <div>
                <Link className="register__link" to="/register">
                    or create an account
                </Link>
            </div>
        </div>
    );
};

export default Profile;
