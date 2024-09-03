import React from 'react';
import Header from './Header';
import '../styles/layout.css'; 

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                {children}
            </main>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Library Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;