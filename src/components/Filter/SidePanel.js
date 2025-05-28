import React from 'react';
import CharacterFilter from './CharacterFilter';
import ThemeFilter from './ThemeFilter';
import './SidePanel.css';

const SidePanel = ({ onFilterChange }) => {
  return (
    <div className="side-panel">
      <div className="side-panel-section">
        <h2 className="side-panel-title">캐릭터</h2>
        <CharacterFilter onFilterChange={onFilterChange} />
      </div>
      
      <div className="side-panel-section">
        <h2 className="side-panel-title">테마</h2>
        <ThemeFilter />
      </div>
    </div>
  );
};

export default SidePanel; 