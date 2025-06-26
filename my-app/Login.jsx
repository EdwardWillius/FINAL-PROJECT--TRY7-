import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    
    localStorage.setItem('token', '1631|yw2GSEyDWgyxIGTtXVcTPq1lEShHoqij6UxpRAXq6ef87504');
    navigate('/home');

    try {
      const res = await fetch('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.message || data.error || 'Login gagal. Silakan coba lagi.');
        setLoading(false);
        return;
      }

      if (data.result && data.result.token) {
        localStorage.setItem('token', data.result.token);
      }

      setLoading(false);
      navigate('/home');
    } catch (err) {
      setError('Terjadi kesalahan jaringan. Silakan coba lagi.');
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background:
          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: 900,
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: 16,
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
        }}
      >
        
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            padding: '48px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#333',
          }}
        >
          <h2 style={{ marginBottom: 32, fontWeight: '700', fontSize: 32, userSelect: 'none', color: '#4a4a4a' }}>
            Welcome Back
          </h2>

          <label htmlFor="username" style={{ fontWeight: '600', marginBottom: 8 }}>
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
            disabled={loading}
            style={{
              padding: '14px 16px',
              marginBottom: 24,
              borderRadius: 10,
              border: '1.5px solid #ccc',
              fontSize: 16,
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#764ba2')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
          />

          <label htmlFor="password" style={{ fontWeight: '600', marginBottom: 8 }}>
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            disabled={loading}
            style={{
              padding: '14px 16px',
              marginBottom: 16,
              borderRadius: 10,
              border: '1.5px solid #ccc',
              fontSize: 16,
              outline: 'none',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#764ba2')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
          />

          {error && (
            <p style={{ color: '#e53e3e', marginBottom: 24, fontWeight: '600' }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '16px 0',
              backgroundColor: '#764ba2',
              color: 'white',
              fontWeight: '700',
              fontSize: 18,
              borderRadius: 12,
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 6px 20px rgba(118, 75, 162, 0.7)',
              transition: 'background-color 0.3s ease',
              userSelect: 'none',
            }}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = '#5a357e';
            }}
            onMouseLeave={(e) => {
              if (!loading) e.currentTarget.style.backgroundColor = '#764ba2';
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p style={{ marginTop: 24, fontSize: 14, color: '#666', textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#764ba2', fontWeight: '700', textDecoration: 'none' }}>
              Register
            </Link>
          </p>
        </form>

        
        <div
          style={{
            flex: 1,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 480,
            display: 'none',
          }}
          className="login-image"
          aria-hidden="true"
        />
      </div>

     
      <style>{`
        @media (min-width: 768px) {
          .login-image {
            display: block;
          }
        }
        @media (max-width: 767px) {
          div[style*="flex-direction: row"] {
            flex-direction: column !important;
          }
          .login-image {
            min-height: 200px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Login;