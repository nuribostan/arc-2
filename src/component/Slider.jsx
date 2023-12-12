import React, { useState, useRef } from "react";
import ImageCard from "../shared/ImageCard";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderWrapperRef = useRef(null);
  const isDragging = useRef(false);
  const startPosX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  const changeSlide = (direction) => {
    const { childElementCount } = sliderWrapperRef.current;
    let slideIndex = currentIndex;
    if (direction === "prev") {
      slideIndex = slideIndex === 0 ? childElementCount - 1 : slideIndex - 1;
    } else if (direction === "next") {
      slideIndex = slideIndex === childElementCount - 1 ? 0 : slideIndex + 1;
    }
    setCurrentIndex(slideIndex);
    updateSliderPosition();
  };

  const startDrag = (e) => {
    if (e.type === "touchstart") {
      startPosX.current = e.touches[0].clientX;
    } else {
      startPosX.current = e.clientX;
      e.preventDefault();
    }
    isDragging.current = true;
    sliderWrapperRef.current.style.transition = "none";
    prevTranslate.current = currentTranslate.current;
  };

  const drag = (e) => {
    if (isDragging.current) {
      const currentPosX =
        e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
      currentTranslate.current =
        prevTranslate.current + currentPosX - startPosX.current;
      sliderWrapperRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
    }
  };

  const endDrag = () => {
    isDragging.current = false;
    const { clientWidth } = sliderWrapperRef.current;
    const threshold = clientWidth / 4;
    if (Math.abs(currentTranslate.current) > threshold) {
      if (currentTranslate.current > 0) {
        changeSlide("prev");
      } else {
        changeSlide("next");
      }
    }
    sliderWrapperRef.current.style.transition = "";
    updateSliderPosition();
  };

  const updateSliderPosition = () => {
    const slideIndex = currentIndex;
    currentTranslate.current =
      -slideIndex * sliderWrapperRef.current.clientWidth;
    sliderWrapperRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    updateSliderPosition();
  };

  return (
    <div className="slider">
      <div
        className="slides-container"
        ref={sliderWrapperRef}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onMouseMove={drag}
        onTouchMove={drag}
        onMouseUp={endDrag}
        onTouchEnd={endDrag}
        onMouseLeave={endDrag}
      >
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentIndex ? "active" : ""}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
            <ImageCard
              className={"slider-image-desc"}
              title={"Condominium"}
              desc={"California young menz club in the city center"}
              buttonText={"View Details"}
              right={"25"}
            />
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {images.map((_, index) => (
          <div
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            key={index}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
