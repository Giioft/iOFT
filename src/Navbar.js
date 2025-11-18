import React from 'react';

function Navbar() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      background: '#111',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      color: 'white'
    }}>
      <div>Home</div>
      <div>Apps</div>
      <div>AI</div>
      <div>Settings</div>
    </div>
  );
}

export default Navbar;
