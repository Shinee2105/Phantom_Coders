import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/login/SignupPage';
import StudentPage from './components/student/StudentPage';
import TutorPage from './components/tutor/TutorPage';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Redirect to LoginPage on initial load
    if (location.pathname === '/') {
      navigate('/login', { replace: true }); // Use replace to prevent going back
    }
  }, [navigate, location]);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/tutor" element={<TutorPage />} />
      </Routes>
    </div>
  );
}

export default App;