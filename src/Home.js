import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AppDrawer from './AppDrawer';

function Home() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar onAppClick={() => setShowDrawer(true)} />

        <div style={{ padding: '20px', position: 'relative' }}>
          <h1>Welcome to iOFT OS</h1>
          <p>Your AI Operating System.</p>

          {showDrawer && (
            <AppDrawer onClose={() => setShowDrawer(false)} />
          )}
        </div>

      </div>
    </div>
  );
}

export default Home;
