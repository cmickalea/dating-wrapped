import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "../Components/Nav";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Profile from "../pages/profile";
import Dashboard from '../pages/dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/register" element={<Register />}/>
                <Route exact path="/profile" element={<Profile />}/>
                <Route exact path="/dashboard" element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;