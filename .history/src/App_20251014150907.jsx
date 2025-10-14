import React, { useState } from 'react';
import Menu from './components/Menu';
import PasswordProtection from './components/PasswordProtection';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <PasswordProtection onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <Menu />;
}

export default App;
