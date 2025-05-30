import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { AuthProvider } from './components/auth/AuthProvider';

import Dashboard from './pages/dashboard';
import Profile from './pages/profile';

const App: React.FC = () => {
  return (
    <AuthProvider>
    
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    
    </AuthProvider>
  );
};

export default App;