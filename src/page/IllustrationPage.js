import React, { useState, useEffect } from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import './IllustrationPage.css';
import FilterPanel from '../components/Filter/FilterPanel';

const IllustrationPage = () => {
  const [images, setImages] = useState([
    // 이미지 데이터 배열
  ]);

  return (
    <div className="illustration-page">
      <FilterPanel />
      <ImageGallery images={images} />
    </div>
  );
};

export default IllustrationPage;
