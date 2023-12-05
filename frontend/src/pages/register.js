import React from "react";
import "../styles/register.css";

const Register = () => {
    return (
        <div className="profile__container">
            <div class="profile__fields row g-3 align-items-center">
            <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                        name
                    </label>
                </div>
                <div class="col-auto">
                    <input
                        type="name"
                        id="name"
                        class="form-control"
                        aria-describedby="email"
                    />
                </div>
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                        email
                    </label>
                </div>
                <div class="col-auto">
                    <input
                        type="email"
                        id="email"
                        class="form-control"
                        aria-describedby="email"
                    />
                </div>
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                        Password
                    </label>
                </div>
                <div class="col-auto">
                    <input
                        type="password"
                        id="inputPassword6"
                        class="form-control"
                        aria-describedby="passwordHelpInline"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
