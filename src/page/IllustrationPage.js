import React, { useState, useEffect } from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import SidePanel from '../components/Filter/SidePanel';
import imageData from '../assets/output.json';
import './IllustrationPage.css';

const IllustrationPage = () => {
  const [filteredImages, setFilteredImages] = useState([]);
  const [filters, setFilters] = useState({
    characters: [],
    themes: {
      illustration: [],
      swimsuit: [],
      rare: [],
      unique: []
    }
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  useEffect(() => {
    // 필터 조건에 따라 이미지 필터링
    let filtered = [...imageData];

    // 캐릭터 필터링
    if (filters.characters.length > 0) {
      filtered = filtered.filter(image => 
        filters.characters.includes(image.character) || 
        filters.characters.includes(image.character_fullname)
      );
    }

    // 테마 필터링
    const allThemes = [
      ...filters.themes.illustration,
      ...filters.themes.swimsuit,
      ...filters.themes.rare,
      ...filters.themes.unique
    ];

    if (allThemes.length > 0) {
      filtered = filtered.filter(image => 
        allThemes.includes(image.theme)
      );
    }

    setFilteredImages(filtered);
  }, [filters]);

  return (
    <div className="illustration-page">
      <SidePanel onFilterChange={handleFilterChange} />
      <ImageGallery images={filteredImages} key={JSON.stringify(filters)} />
    </div>
  );
};

export default IllustrationPage;
