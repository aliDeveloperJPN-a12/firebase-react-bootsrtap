import React from "react";
import './slider.css'
function Slider() {
  return (
    <div>
      {/* ---------------------------------------------------------- */}
      {/* Carousel */}
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        {/* Indicators/dots */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to={0}
            className="active"
          />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={1} />
          <button type="button" data-bs-target="#demo" data-bs-slide-to={2} />
        </div>
        {/* The slideshow/carousel */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://sm.ign.com/ign_za/feature/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_6uv2.jpg" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="https://sm.ign.com/ign_za/feature/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_6uv2.jpg" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="https://sm.ign.com/ign_za/feature/t/the-top-25/the-top-25-greatest-anime-characters-of-all-time_6uv2.jpg" className="d-block w-100" />
          </div>
        </div>
        {/* Left and right controls/icons */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
      {/* ---------------------------------------------------------- */}
    </div>
  );
}

export default Slider;
