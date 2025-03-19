import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter/Filter';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import './IllustrationPage.css';

const IllustrationPage = () => {
  const [filters, setFilters] = useState({
    categories: ['All', 'Category1', 'Category2'],
    selectedCategory: 'All',
  });

  const [images, setImages] = useState([
    // 이미지 데이터 배열
  ]);

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
    <div className="illustration-page">
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <ImageGallery images={images} />
    </div>
  );
};

export default IllustrationPage;
