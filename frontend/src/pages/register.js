import React, { useState } from "react";
import "../styles/register.css";

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <div className="profile__container">
            <div class="profile__fields row g-3 align-items-center">
            <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">
                        username
                    </label>
                </div>
                <div class="col-auto">
                    <input
                        type="text"
                        id="username"
                        class="form-control"
                        name="username"
                        aria-describedby="username"
                        onChange={(e) => setUsername(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" class="btn btn-success">register</button>
            </div>
        </div>
    );
};

export default Register;
