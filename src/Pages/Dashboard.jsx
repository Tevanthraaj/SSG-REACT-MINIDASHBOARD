import React from 'react';
import useStore from '../Store/store';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const username = useStore((state) => state.username);
  const logout = useStore((state) => state.logout);
  const toggleTheme = useStore((state) => state.toggleTheme);
  const theme = useStore((state) => state.theme);

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = confirm("Do you really want to logout?");
    if (confirmLogout) {
      logout();
      navigate('/login');
    }
  };

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div className={`dashboard-container ${theme}`}>
      <header className="dashboard-header">
        <h1>Welcome, {username || 'Student'} 👋</h1>
        <div className="header-buttons">
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="card">
          <h2>Profile</h2>
          <p>Username: {username || 'Student'}</p>
          <p>View and edit your personal info.</p>
          <button onClick={() => alert('Profile section coming soon!')}>Open</button>
        </div>

        <div className="card">
          <h2>Courses</h2>
          <p>Check your enrolled subjects and progress.</p>
          <button onClick={() => alert('Courses section coming soon!')}>Open</button>
        </div>

        <div className="card">
          <h2>Reports</h2>
          <p>View your grades and performance analysis.</p>
          <button onClick={() => alert('Reports section coming soon!')}>Open</button>
        </div>
      </main>

      <footer>
        <button className="home-btn" onClick={goToHome}>🏠 Go to Home</button>
      </footer>
    </div>
  );
};

export default Dashboard;
