import React, { useState, useEffect } from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import SidePanel from '../components/Filter/SidePanel';
import './IllustrationPage.css';

const IllustrationPage = () => {
  const [images, setImages] = useState([]);
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
    // 필터 조건에 따라 이미지를 가져오거나 필터링하는 로직
    console.log('Current filters:', filters);
  }, [filters]);

  return (
    <div className="illustration-page">
      <SidePanel onFilterChange={handleFilterChange} />
      <ImageGallery images={images} />
    </div>
  );
};

export default IllustrationPage;
