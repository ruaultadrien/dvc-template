import React from 'react';
import Grid from './components/Grid';
import './App.css';
import { Menu } from 'antd';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Menu mode="horizontal">
        <Menu.Item className='menu-item' key='logo'>
          <a href="https://www.visium.ch">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </Menu.Item>
        <Menu.Item className='menu-item' key="home">DAG</Menu.Item>
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
