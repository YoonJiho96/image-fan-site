import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.title} />
      ))}
    </div>
  );
};

export default ImageGallery;
