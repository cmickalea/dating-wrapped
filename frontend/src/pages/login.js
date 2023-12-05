import React from "react";
import "../styles/login.css";

const Login = () => {
    return (
        <div className="login__container">
            <div class="login__fields row g-3 align-items-center">
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

export default Login;
