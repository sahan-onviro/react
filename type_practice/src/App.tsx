import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componenet/Header';
import Button from './componenet/Button';
import AdvButton from './componenet/AdvButton';
import { Input } from './componenet/Input';

function App() {
  return (
    <div className="App">
      <AdvButton onClick={(e) => {
        e.preventDefault();
        console.log(e)
      }} ><h1>asdsadsad</h1></AdvButton>
      <Header title='hello' />
      <Input />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* {title} */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
