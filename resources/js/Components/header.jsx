import React from "react";
export default function header() {
  return (
    <div className="hero-fullscreen d-flex" style={{ backgroundImage: 'url(https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/header.jpeg?v=1700240641754)', height: '53vh' }}>
      <div className="container d-flex flex-column align-items-center justify-content-end text-center text-warning">
        <h1 className="display-4"></h1>
        
        
        
        {/* Icono de contacto de WhatsApp */}
        <p className="mt-3">
          <a href="https://wa.me/+591" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
            <i className="bi bi-whatsapp"></i> Contacto por WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}
