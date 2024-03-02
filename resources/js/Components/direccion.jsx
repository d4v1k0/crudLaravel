import React from "react";

export default function Direccion() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="section-heading text-uppercase">Dirección</h2>
            <i className="bi bi-geo-alt-fill"></i>
            <p className="text-muted"></p>
          </div>
        </div>
        <div className="row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1192.7990299716105!2d-67.56606276361806!3d-15.833768376469811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sbo!4v1700267664003!5m2!1ses!2sbo"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
