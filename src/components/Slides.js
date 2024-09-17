import React, { useState, useEffect } from 'react';
import './Slides.css';

// Import your images
import img1 from '../medico_assets/banners/banner1.jpg';
import img2 from '../medico_assets/banners/banner2.jpg';
import img3 from '../medico_assets/banners/banner3.png';
import img4 from '../medico_assets/banners/banner4.jpg';
import img5 from '../medico_assets/banners/banner5.jpg';

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('forward'); // Track direction of movement

  // Define the slides array with your images
  const slides = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (direction === 'forward') {
          if (prevSlide === slides.length - 1) {
            // Switch direction to backward when last slide is reached
            setDirection('backward');
            return prevSlide - 1;
          }
          return prevSlide + 1;
        } else { // Backward direction
          if (prevSlide === 0) {
            // Switch direction to forward when first slide is reached
            setDirection('forward');
            return prevSlide + 1;
          }
          return prevSlide - 1;
        }
      });
    }, 4000); // Adjust the interval as needed

    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, [direction, slides.length]);

  return (
    <div className="slideshow-container">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button className="prev" onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}>
        &#10094;
      </button>
      <button className="next" onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Slides;
