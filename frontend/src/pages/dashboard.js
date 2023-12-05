import React from "react";
import "../styles/dashboard.css";
// import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="dashboard__container position-center">
            <h1 className="dashboard__header">Who I've dated this Year</h1>
            <div className="dates__container">
                <div class="card date__card--01" style={{width: 18 + 'rem'}}>
                    <div class="card-header">Featured</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>

                <div class="card date__card--02" style={{width: 18 + 'rem'}}>
                    <div class="card-header">Featured</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>

                <div class="card date__card--03" style={{width: 18 + 'rem'}}>
                    <div class="card-header">Featured</div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
