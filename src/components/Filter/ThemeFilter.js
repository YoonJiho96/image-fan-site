import React, { useState, useEffect } from 'react';
import FilterSelectBox from './FilterSelectBox';
import themeData from '../../assets/filter-theme.json';

const ThemeFilter = ({ onFilterChange }) => {
  // 테마 필터
  const [illust, setIllust] = useState([]);
  const [swim, setSwim] = useState([]);
  const [rare, setRare] = useState([]);
  const [unique, setUnique] = useState([]);

  useEffect(() => {
    onFilterChange('themes', {
      illustration: illust.map(option => option.value),
      swimsuit: swim.map(option => option.value),
      rare: rare.map(option => option.value),
      unique: unique.map(option => option.value)
    });
  }, [illust, swim, rare, unique, onFilterChange]);

  return (
    <div>
      <FilterSelectBox
        label="일러스트 아바타"
        options={themeData.일러스트.options}
        selectedOptions={illust}
        onChange={setIllust}
      />
      <FilterSelectBox
        label="수영복"
        options={themeData.수영복.options}
        selectedOptions={swim}
        onChange={setSwim}
      />
      <FilterSelectBox
        label="레어 아바타"
        options={themeData.레어.options}
        selectedOptions={rare}
        onChange={setRare}
      />
      <FilterSelectBox
        label="유니크 아바타"
        options={themeData.유니크.options}
        selectedOptions={unique}
        onChange={setUnique}
      />
    </div>
  );
};

export default ThemeFilter;
