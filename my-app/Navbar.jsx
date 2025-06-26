import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const activeStyle = {
    color: '#5C6AC4',
    borderBottom: '3px solid #5C6AC4',
    fontWeight: '700',
  };

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        padding: '12px 24px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        fontWeight: '600',
        fontSize: 16,
        userSelect: 'none',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo area */}
      <div
        onClick={() => navigate('/home')}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          marginRight: 'auto',
          userSelect: 'none',
        }}
        title="Go to Home"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/69/69524.png" 
          alt="Logo"
          style={{ width: 40, height: 40, marginRight: 8 }}
          draggable={false}
        />
        <span style={{ fontWeight: '700', fontSize: 20, color: '#5C6AC4' }}>
          SportReserve
        </span>
      </div>

      {/* Navigation links */}
      {[
        { to: '/login', label: 'Login' },
        { to: '/home', label: 'Home' },
        { to: '/categories', label: 'Sport Category' },
        { to: '/activities', label: 'Activity' },
        { to: '/location', label: 'Location' },
        { to: '/cart', label: 'Cart' },
        { to: '/methods', label: 'Payment Method' },
        { to: '/proof', label: 'Payment Proof' },
        { to: '/transaction', label: 'Transaction' },
        { to: '/transactionhistory', label: 'Transaction History' },
        
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          style={({ isActive }) => ({
            color: isActive ? '#5C6AC4' : '#333',
            borderBottom: isActive ? '3px solid #5C6AC4' : '3px solid transparent',
            paddingBottom: 6,
            textDecoration: 'none',
            transition: 'color 0.3s ease, border-bottom-color 0.3s ease',
          })}
          title={label}
        >
          {label}
        </NavLink>
      ))}

      <button
        onClick={handleLogout}
        title="Logout"
        style={{
          marginLeft: 24,
          padding: '6px 14px',
          backgroundColor: '#f44336',
          border: 'none',
          borderRadius: 6,
          color: '#fff',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(244,67,54,0.5)',
          transition: 'background-color 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 14,
          userSelect: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d32f2f')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f44336')}
      >
        🔒 Logout
      </button>
    </nav>
  );
}

export default Navbar;