import React from 'react';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>iOFT OS</h1>
      <p>Welcome to your AI operating system.</p>

      <div style={{ marginTop: 20 }}>
        <input 
          style={{ 
            width: '100%', 
            padding: 10, 
            borderRadius: 8, 
            border: '1px solid #999' 
          }}
          placeholder="Ask your AI..."
        />
      </div>
    </div>
  );
}

export default Home;
