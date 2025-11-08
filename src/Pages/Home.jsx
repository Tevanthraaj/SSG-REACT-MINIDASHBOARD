import React from 'react';
import useStore from '../Store/store';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const username = useStore((state) => state.username);
    const password = useStore((state) => state.password);
    const logout = useStore((state) => state.logout);
    const toggleTheme = useStore((state) => state.toggleTheme);
    const theme = useStore((state) => state.theme);

    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = confirm("Do you really want to logout?");
        if (confirmLogout) {
            logout(); // clear Zustand store
            navigate('/login'); // navigate only if confirmed
        }
    };

    const goToDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <div className={`home-container ${theme}`}>
            <div className="home-header">
                <button className="theme-btn" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>

            <h1>Welcome, {username ? username : 'Guest'}!</h1>
            <h2>Password: {password ? password : 'Not available'}</h2>

            <div className="home-buttons">
                <button onClick={goToDashboard}>Go to Dashboard</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Home;
