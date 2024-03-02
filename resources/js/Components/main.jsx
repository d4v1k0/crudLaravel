import React from "react";

import Header from "./header";
//import Logo3d from "./cafe3d";
import "../../css/card.css";
export default function Main() {
  return (
    <>
      <section id="inicio" className="bg-light py-5 mt-20 mb-20">
        <div className="container">
          <div className="row justify-content- center align-items-center">
            <div className="col-md-6 text-center">
              {/*<Logo3d />*/}
              <img src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/Logo-FINCAFE-Asociados-Findepro-1024x768.png?v=1699756781698" alt="" />
            </div>
            <div className="col-md-6 text-center">
              <h1 className="display-4">Bienvenido a Fincafe</h1>
              <p className="lead">
                Ofrecemos soluciones financieras flexibles y personalizadas para
                tus necesidades.
              </p>
              <a href="#prestamos" className="btn btn-primary mt-5">
                Ver Préstamos
              </a>
            </div>
          </div>
        </div>
      </section>
      <Header />

      <section id="prestamos" className="py-5">
        <div className="container">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-3 h-100">
                  <img
                    src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/como_sembrar_cafe_49857_600.jpg?v=1700966665157"
                    className="card-img-top custom-card-image rounded-circle"
                    alt="Descripción de la imagen 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">QUIENES SOMOS</h5>
                    <p className="card-text">
                      FINCAFE, es la entidad financiera del sector cafetalero,
                      modelo y referente institucional, que brinda servicios
                      financieros integrales de calidad, comprometida con el
                      desarrollo económico y social de las comunidades rurales
                      del país.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3 h-100">
                  <img
                    src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/galeria-siembraCosechaCafe-03.jpg?v=1700966258687"
                    className="card-img-top custom-card-image rounded-circle"
                    alt="Descripción de la imagen 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">MISION</h5>
                    <p className="card-text">
                      FINCAFE brinda servicios financieros adecuados y oportunos
                      en armonía con el medio ambiente, posibilitando el
                      mejoramiento de la calidad de vida de las familias de
                      productores agropecuarios.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3 h-100">
                  <img
                    src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/depositphotos_19279355-stock-photo-coffee-beans-with-leaves-in.webp?v=1700966402851"
                    className="card-img-top custom-card-image rounded-circle"
                    alt="Descripción de la imagen 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">VISION</h5>
                    <p className="card-text">
                      FINCAFE, es la entidad financiera del sector cafetalero,
                      modelo y referente institucional, que brinda servicios
                      financieros integrales de calidad, comprometida con el
                      desarrollo económico y social de las comunidades rurales
                      del país.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="creditos" className="bg-light py-5 d-flex">
        
        <div className="container">
        <div className="text-center">
          <h2 className="display-4">Servicios financieros</h2>
          <p className="lead">FINCAFE cuenta con los siguientes productos creditos!</p>
          </div>
          <div className="container mt-5">
            
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3 h-100">
                  <img
                    src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/42d420c4-2138-47c9-a82a-aae841f13fc7.jpg?v=1700964653071"
                    className="card-img-top h-100"
                    alt="Descripción de la imagen 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">CREDITO COMERCIAL</h5>
                    <p className="card-text">
                      Credito Comercial con un interes 24%
                    </p>
                    <button className="btn btn-success">Ver PDF</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3 h-100">
                  <img
                    src="https://cdn.glitch.global/c0b1ca5a-5332-4810-b892-4260265fb720/FINCAFE-001.jpeg?v=1700958942619"
                    className="card-img-top h-100"
                    alt="Descripción de la imagen 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">CREDITO PARA JOVENES</h5>
                    <p className="card-text">
                      Credito para Jovenes con un Interes 11.5%.
                    </p>
                    <button className="btn btn-success">Ver PDF</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quienes-somos" className="py-5">
        <div className="container">
          <h2 className="display-4">Contactos</h2>
          <p className="lead">
            Somos Fincafe, una entidad financiera dedicada a ofrecer soluciones
            financieras flexibles y personalizadas para satisfacer las
            necesidades de nuestros clientes.
          </p>
        </div>
      </section>
    </>
  );
}
