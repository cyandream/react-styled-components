import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Styled Component Library
        </p>
  
  
        <Button variant="primary"/><br></br>
        <Button  variant="secondary"/><br></br>
        <br></br><br></br>
        <p>Counter Buttons</p>
        <Counter/>
        <Footer></Footer>
      </header>

    </div>
  );
}

export default App;
