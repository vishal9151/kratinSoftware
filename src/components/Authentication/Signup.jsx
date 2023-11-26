import React, { useRef } from 'react';
import { useTodo } from '../../context/userContext';
import { Link } from 'react-router-dom';

function SignUp() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { handleSignup, message } = useTodo();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#4B5563', // Equivalent to bg-slate-600
    color: '#000000', // Equivalent to text-black
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
    fontSize: '2rem', // Equivalent to text-2xl
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #E2E8F0', // Equivalent to border
    borderRadius: '0.25rem', // Equivalent to rounded
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

  const messageStyle = {
    color: '#FF0000', // Equivalent to text-red-500
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    handleSignup({ username, password });

    usernameRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ display: 'block', fontWeight: 'medium' }}>
              Email:
            </label>
            <input
              type="email"
              id="username"
              ref={usernameRef}
              required
              style={inputStyle}
              placeholder="Enter Email Address"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', fontWeight: 'medium' }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              required
              minLength={8}
              style={inputStyle}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button type="submit" style={buttonStyle}>
              Sign Up
            </button>
            <span style={linkStyle}>
              Already have an account? <Link to="/login" style={{ textDecoration: 'underline', color: 'blue' }}>Login</Link>
            </span>
          </div>
        </form>
        {message && <h1 style={messageStyle}>User exists</h1>}
      </div>
    </div>
  );
}

export default SignUp;
