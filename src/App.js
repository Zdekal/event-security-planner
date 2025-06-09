import React from 'react';
import { auth } from './firebase';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Event Security Planner</h1>
      <p>Firebase Auth: {auth ? 'Initialized' : 'Not Initialized'}</p>
    </div>
  );
}

export default App;
