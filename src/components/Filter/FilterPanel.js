import React, { useState, useEffect } from 'react';
import ThemeFilter from './ThemeFilter';
import CharacterFilter from './CharacterFilter';
import "./Filter.css";

const FilterPanel = () => {
  // 캐릭터 필터
  const [filters, setFilters] = useState({
    categories: ['All', 'Category1', 'Category2'],
    selectedCategory: 'All',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  useEffect(() => {
    // 필터 조건에 따라 이미지를 가져오거나 필터링하는 로직
  }, [filters]);

  return (
    <div>
      <CharacterFilter filters={filters} onFilterChange={handleFilterChange} />
      <ThemeFilter />
    </div>
  );
};

export default FilterPanel;
