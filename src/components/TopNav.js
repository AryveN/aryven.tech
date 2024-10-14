import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css'; // Optional CSS file for styling

const TopNav = () => {
    return (
        <nav className="top-nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Info</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default TopNav;