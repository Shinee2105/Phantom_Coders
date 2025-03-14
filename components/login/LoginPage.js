import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../../supabaseClient';
import '../../styles/login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Sign in using email and password
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (loginError) {
        setError(loginError.message);
        return;
      }

      // Get the logged-in user's details
      const { data: user, error: userError } = await supabase.auth.getUser();

      if (userError || !user || !user.user) {
        setError("User not found.");
        return;
      }

      // Debug: Check if we have the user ID
      console.log("User ID from Supabase Auth:", user.user.id);

      // Check if the email is confirmed
      if (!user.user.confirmed_at) {
        setError("Email is not confirmed. Please check your email.");
        return;
      }

      // Successful login, navigate to the student dashboard
      navigate('/student');  // Adjust if necessary
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <button
          type="button"
          className="toggle-button"
          onClick={handleSignupRedirect}
        >
          Need an account? Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
