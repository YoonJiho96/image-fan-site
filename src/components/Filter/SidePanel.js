import React, { useRef } from 'react';
import CharacterFilter from './CharacterFilter';
import ThemeFilter from './ThemeFilter';
import './SidePanel.css';

const SidePanel = ({ onFilterChange }) => {
  const characterFilterRef = useRef();
  const themeFilterRef = useRef();

  const handleResetAll = () => {
    if (characterFilterRef.current) {
      characterFilterRef.current.initializeFilters();
    }
    if (themeFilterRef.current) {
      themeFilterRef.current.initializeFilters();
    }
  };

  return (
    <div className="side-panel">
      <div className="side-panel-header">
        <h1>필터</h1>
        <button 
          className="reset-all-button"
          onClick={handleResetAll}
          title="모든 필터 초기화"
        >
          전체 초기화
        </button>
      </div>
      <div className="side-panel-section">
        <CharacterFilter ref={characterFilterRef} onFilterChange={onFilterChange} />
      </div>
      <div className="side-panel-section">
        <ThemeFilter ref={themeFilterRef} onFilterChange={onFilterChange} />
      </div>
    </div>
  );
};

export default SidePanel; 