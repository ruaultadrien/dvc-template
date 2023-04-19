import React from 'react';
import Grid from './components/Grid';
import './App.css';
import { Menu } from 'antd';
import logo from './logo.svg';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Menu mode="horizontal">
        <Menu.Item className='menu-item' key='logo'>
          <Link to="visium.ch">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="home">Home</Menu.Item>
        <Menu.Item className='menu-item' key="about">About</Menu.Item>
        <Menu.Item className='menu-item' key="contact">Contact</Menu.Item>
      </Menu>
      <main className='main-content'>
        <Grid />
      </main>
    </div>
  );
}

export default App;
