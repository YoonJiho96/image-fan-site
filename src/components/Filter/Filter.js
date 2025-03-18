import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  return (
    <div className="filter">
      {/* 예시: 카테고리 필터 */}
      <label htmlFor="category">카테고리:</label>
      <select id="category" onChange={(e) => onFilterChange('category', e.target.value)}>
        {filters.categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* 추가적인 필터 옵션들 */}
    </div>
  );
};

export default Filter;
