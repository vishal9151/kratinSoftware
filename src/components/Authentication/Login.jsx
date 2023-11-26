import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTodo } from '../../context/userContext';

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { handleLogin } = useTodo();
  const navigate = useNavigate();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#4B5563', // Equivalent to bg-slate-600
  };

  const formContainerStyle = {
    width: '50%',
    margin: '0 auto',
    padding: '1rem',
    border: '1px solid #CBD5E0', // Equivalent to border
    borderRadius: '0.375rem', // Equivalent to rounded-lg
    backgroundColor: '#F9FAFB', // Equivalent to bg-slate-50
  };

  const headingStyle = {
    fontSize: '1.75rem', // Equivalent to text-2xl
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #E2E8F0', // Equivalent to border
    borderRadius: '0.25rem', // Equivalent to rounded
    color: "black",
  };

  const buttonStyle = {
    backgroundColor: '#1E40AF', // Equivalent to bg-blue-500
    color: '#FFFFFF', // Equivalent to text-white
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem', // Equivalent to rounded
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Equivalent to hover:bg-blue-600
  };

  const linkStyle = {
    color: '#4A5568', // Equivalent to text-gray-600
    textDecoration: 'underline',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    handleLogin({ username, password });

    navigate('/');
    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Login</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem',color: 'black' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ display: 'block', fontWeight: 'medium',color: "black" }}>
              Username:
            </label>
            <input type="text" id="username" ref={usernameRef} style={inputStyle} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', fontWeight: 'medium' }}>
              Password:
            </label>
            <input type="password" id="password" ref={passwordRef} style={inputStyle} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button type="submit" style={buttonStyle}>
              Login
            </button>
            <span style={linkStyle}>
              Don't have an account? <Link to="/signup" style={{ textDecoration: 'underline', color: 'blue' }}>Sign up</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
