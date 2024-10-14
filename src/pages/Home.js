import React from 'react';
import logo from '../AT.png';
import LinkButton from '../components/buttons/LinkButton';
import './Pages.css';

function Home() {
    return (
        <div className="Page">
            <header className="Page-header">

                <img src={logo} className="Page-logo" alt="logo" />

                <h1>Welcome to Aryven.Tech</h1>
                <p>🚧 Website is currently under construction 🚧</p>
    
                <div>
                    <LinkButton label="GitHub" link="https://github.com/AryveN" />
                    <LinkButton label="LinkedIn" link="https://www.linkedin.com/in/kryštof-hugo-malý-94b164217/" />
                </div>
            </header>
        </div>
    );
}

export default Home;