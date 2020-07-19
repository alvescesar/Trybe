import React from 'react';

const tasks = [
  'create-react-app my-app',
  'cd my-app',
  'npm start'
];

class App extends React.Component {
  render() {
    return (
      <ul>
        {tasks.map(task => {
          return (
            <li>{task}</li>
          );
        })}
      </ul>
    );
  };
}

export default App;
