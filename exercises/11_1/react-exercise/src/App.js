import React from 'react';
import './App.css';

const tasks = [
  'npx create-react-app my-app',
  'cd my-app-folder',
  'npm start'
]

function App() {
  return (
    <ul>{ tasks.map(task => <li>{ task }</li>) }</ul>
  );
}

export default App;
