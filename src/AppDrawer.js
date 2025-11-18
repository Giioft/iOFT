import React from 'react';

function AppDrawer({ onClose }) {
  const apps = [
    { name: 'Chat', icon: '💬' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Browser', icon: '🌐' },
  ];

  return (
    <div
      style={{
        position: 'absolute',
        top: '60px',
        left: '80px',
        background: '#111',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        width: '200px'
      }}
    >
      <h3>Apps</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {apps.map((app) => (
          <li key={app.name} style={{ margin: '10px 0' }}>
            {app.icon} {app.name}
          </li>
        ))}
      </ul>

      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default AppDrawer;
