import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React3
        </a>
      </header>
    </div>
  );
}

export default App;
// docker run -it -p 3000:3000 -v /app/node_modules -v $(pwd):/app fbca85cfc315
// docker-compose up
// docker build -f Dockerfile.dev .
// docker exec -it c15e0de99a56 npm run test