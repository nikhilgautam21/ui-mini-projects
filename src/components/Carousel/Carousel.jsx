import React, { useState } from 'react';

const defaultSlides = ['Slide1', 'Slide2', 'Slide3'];

function Carousel() {
  const [slides, setSlides] = useState(defaultSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleClickNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handleClickPrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="container">
      <div className="carousel-container">
        <div
          className="slides"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {slides.map((item, idx) => (
            <div className={`${idx === activeSlide} slide`}>{item}</div>
          ))}
        </div>
      </div>
      <div className="actions">
        <button onClick={handleClickPrev}>Prev</button>
        <button onClick={handleClickNext}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
