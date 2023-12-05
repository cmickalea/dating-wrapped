import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "../Components/Nav";
import Home from "../pages/home";
import Profile from "../pages/profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;