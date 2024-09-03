import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/header.css'; 

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img src="/logo.png" alt="Library Logo" className="logo" />
                <h1 className="site-title"></h1>
              
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/add-book">Add Book</Link>
                    <Link to="/about">About</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;