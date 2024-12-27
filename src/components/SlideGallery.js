import React, { useState } from 'react';

// Gallery component
function SlideGallery(props) {
//   const images = [
//     'image1.jpg',
//     'image2.jpg',
//     'image3.jpg',
//     'image4.jpg', // Add more image paths as needed
//   ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change image based on direction
  const changeImage = (direction) => {
    let newIndex = currentIndex + direction;

    // Loop back to the first image if at the end
    if (newIndex < 0) {
      newIndex = props.images.length - 1;
    }

    // Loop back to the last image if at the start
    if (newIndex >= props.images.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      <button className="prev" onClick={() => changeImage(-1)}>
        &#10094;
      </button>

      <div className="gallery">
        <img src={props.images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>

      <button className="next" onClick={() => changeImage(1)}>
        &#10095;
      </button>
    </div>
  );
}

export default SlideGallery;