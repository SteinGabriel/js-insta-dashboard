import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import './style.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
