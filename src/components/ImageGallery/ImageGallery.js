import React, { useState } from 'react';
import './ImageGallery.css';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <img 
          src={process.env.PUBLIC_URL + '/Closers/캐릭터 일러압/' + image.path.replace(/\\/g, '/')}
          alt={image.filename} 
          className="modal-image"
        />
        <div className="modal-info">
          <h3>{image.character}</h3>
          <p>팀: {image.team}</p>
          <p>테마: {image.theme}</p>
          <p>타입: {image.type}</p>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerPage = 12;

  // 현재 페이지의 이미지 계산
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setInputPage('');
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setInputPage(value);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const pageNumber = parseInt(inputPage);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      handlePageChange(pageNumber);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    const maxVisiblePages = 10;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // 첫 페이지로 이동
    if (startPage > 1) {
      pageNumbers.push(
        <button
          key="first"
          onClick={() => handlePageChange(1)}
          className="page-button"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span key="ellipsis1" className="page-button ellipsis">
            ...
          </span>
        );
      }
    }

    // 페이지 번호
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`page-button ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    // 마지막 페이지로 이동
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="ellipsis2" className="page-button ellipsis">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key="last"
          onClick={() => handlePageChange(totalPages)}
          className="page-button"
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  if (images.length === 0) {
    return <div className="loading">이미지를 불러오는 중...</div>;
  }

  return (
    <div className="image-gallery-container">
      <div className="image-gallery">
        {currentImages.map((image) => (
          <div 
            key={image.filename} 
            className="image-card"
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={process.env.PUBLIC_URL + '/Closers/캐릭터 일러압/' + image.path.replace(/\\/g, '/')}
              alt={image.filename}
              className="gallery-image"
            />
            <div className="image-info">
              <h3>{image.character}</h3>
              <p>팀: {image.team}</p>
              <p>테마: {image.theme}</p>
              <p>타입: {image.type}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pagination">
        {renderPagination()}
        <form onSubmit={handleInputSubmit} className="page-input-form">
          <input
            type="text"
            value={inputPage}
            onChange={handleInputChange}
            placeholder="페이지"
            className="page-input"
          />
          <button type="submit" className="page-input-button">
            이동
          </button>
        </form>
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ImageGallery;
