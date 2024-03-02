import React from "react";
export default function Pie() {
  return (
    <footer className="footer bg-success text-white">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6">
            <h4>Direccion de Agencias</h4>
            <p>EL ALTO</p>
            <p>Dirección: Av. Juan Pablo II, #2926, Zona 16 de Julio</p>
            <p>Teléfono: +591 2284 6287</p>
            <p>CARANAVI</p>
            <p>Calle Litoral # 2 esq. Av. Mariscal Santa Cruz, Manzano A, Zona Central</p>
            <p>Correo Electrónico: info@fincafe.com</p>
          </div>
          <div className="col-md-3">
            <h4>Redes Sociales</h4>
            <ul className="redes-sociales list-unstyled">
              <li>
                <a
                  href="https://www.facebook.com/tucuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-facebook">Facebook</i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tucuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-instagram"></i>Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/tucuenta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i className="bi bi-twitter"></i>Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h4>Enlaces a Páginas Web</h4>
            <ul className="redes-sociales list-unstyled">
              <li>
                <a href="https://www.economiayfinanzas.gob.bo/" target="_blank" className="text-white">
                  Ministerio de Economía
                </a>
              </li>
              <li>
                <a href="https://www.asfi.gob.bo/" target="_blank" className="text-white">
                  ASFI
                </a>
              </li>
              <li>
                <a href="https://www.bnb.com.bo/" target="_blank" className="text-white">
                  Banco Nacional de Bolivia
                </a>
              </li>
              <li>
                <a href="https://www.bcb.gob.bo//" target="_blank" className="text-white">
                  Banco centra de Bolivia
                </a>
              </li>
              <li>
                <a href="https://www.findepro.org/" target="_blank" className="text-white">
                  Findepro
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
