import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

export default function App() {
  const [activePlatform, setActivePlatform] = useState('lc');

  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar active={activePlatform} onSelect={setActivePlatform} />
        <MainContent platformKey={activePlatform} />
      </div>
    </div>
  );
}