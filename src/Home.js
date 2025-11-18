import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div style={{ padding: '20px' }}>
          <h1>Welcome to iOFT OS</h1>
          <p>Your AI Operating System.</p>
        </div>

      </div>
    </div>
  );
}

export default Home;
