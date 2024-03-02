import React from "react";
import '../../css/slide.css'

export default function Slide() {
  return (
<section id="tres">
      <div id="carouselExample" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          
          <div className="carousel-item active">
            <img
              src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/FINCAFE-004.jpeg?v=1699367134372"
              className="img-fluid rounded mx-auto d-block custom-slide-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/FINCAFE-005.jpeg?v=1699729974301"
              className="img-fluid rounded mx-auto d-block custom-slide-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/FINCAFE-001.jpeg?v=1699729898370"
              className="img-fluid rounded mx-auto d-block custom-slide-image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/plaza.jpeg?v=1700251575257"
              className="img-fluid rounded mx-auto d-block custom-slide-image"
              alt="..."
            />
          </div>
        
       
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    )
}