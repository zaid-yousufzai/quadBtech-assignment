import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic here (e.g., API request or local validation)
    // If authentication is successful, dispatch user data to Redux store
    const user = { email }; // Replace with actual user data
    dispatch({ type: 'LOGIN_USER', payload: user });

    // Store user data in local storage for session management
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect the user to the dashboard or a protected route
    navigate('/dashboard');
  };

  const handleSignUp = () => {
    // Perform user registration logic here (e.g., API request or local validation)
    // If registration is successful, dispatch user data to Redux store
    const user = { email }; // Replace with actual user data
    dispatch({ type: 'SIGNUP_USER', payload: user });

    // Store user data in local storage for session management
    localStorage.setItem('user', JSON.stringify(user));

    // Redirect the user to the dashboard or a protected route
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isSignUp ? (
        <button onClick={handleSignUp}>Sign Up</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}
      </p>
    </div>
  );
};

export default LoginPage;