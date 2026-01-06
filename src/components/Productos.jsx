import "./Productos.css";
import React, { useState, useEffect, useRef } from "react";

export default function Productos() {
  const images = [
    "https://www.ds3comunicaciones.com/AMP/images/6-1427200-4-1.jpg",
    "https://www.ds3comunicaciones.com/AMP/images/Caja.jpg",
    // "https://media.falabella.com/sodimacPE/4050789_01/w=800,h=800,fit=pad",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <a href="https://www.ds3comunicaciones.com/index.html">
          <i className="fa-solid fa-house text-[0.9em]"></i>
        </a>
        <span>{">"}</span>
        <a href="https://www.ds3comunicaciones.com/AMP/">AMP</a>
        <span>{">"}</span>
        <a href="https://www.ds3comunicaciones.com/AMP/index.html#cablecat6">Cable de red Cat 6</a>
        <span>{">"}</span>
        <span>6-1427200-4</span>
      </div>

      {/* Contenido principal */}
      <div className="product-container">
        {/* Galería */}
        <div className="div-gallery">
          <div className="product-gallery">
            <div className="main-image">
              <img src={activeImage} alt="Cable UTP AMP Cat 6" />
            </div>

            <div className="thumbnail-gallery">
              {images.map((img) => (
                <div
                  key={img}
                  className={`thumbnail ${activeImage === img ? "active" : ""}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt="Vista producto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="product-info">
          <h1 className="product-title">
            Cable UTP AMP Categoría 6 Chaqueta CMR 23AWG 6-1427200-4
          </h1>

          <div className="product-price">
            U$ 187.00
            <button
              onClick={() =>
                (window.location.href =
                  "https://www.ds3comunicaciones.com/pedido.html")
              }
              className="btn-primary"
            >
              <i className="fas fa-shopping-cart"></i> Comprar Ahora
            </button>
          </div>

          <div className="product-details">
            <h3>Descripción:</h3>
            <p>
              Los Cables AMP NetConnect categoría 6 exceden los requerimientos
              TIA/EIA-568-B.2-1 e ISO / IEC 11801 Clase E Además cumplen con
              todos los requisitos de rendimiento para aplicaciones actuales y
              propuestos, tales como Gigabit Ethernet (1000BASE-TX),
              10/100BASE-TX, Token Ring, ATM 155 Mbps, 100 Mbps TPPMD, Vídeo
              ISDN, analógico y digital y analógica y digital de voz (VoIP).
              <br />
              <br />
              AMP NetConnect categoría 6 cables UTP están disponibles en (CMR)
              colores estándar, incluyendo blanco, gris y azul. El embalaje es
              en un reel-in-box, con el estándar 1000ft libres de empalme
              longitudinales.
              <br />
              <br />
              Rendimiento del cable debe ser verificada independientemente y
              caracterizado a 600 MHz. Cable se suministra en un carrete-in-box.
              Independiente verificación del cumplimiento de inflamabilidad será
              NEC artículo 800 y NFPA 70, CMR (ANSI / UL 1666, IEC 332-1). Cable
              horizontal debe ser AMP NETCONNECT número X-1427200-X.
            </p>
            <br />

            <div className="border-t pt-4">
              <h3>Download:</h3>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://www.ds3comunicaciones.com/AMP/files/6-1427200-4-DS.pdf")
                }
                className="BotonSecundario"
              >
                <i className="ico1 fas fa-file-pdf"></i> Ficha Técnica
              </button>
              {/* <button className="BotonSecundario">
                <i className="ico2 fas fa-book-open"></i> Manual
              </button>
              <button className="BotonSecundario">
                <i className="ico3 fas fa-file-alt"></i> Especificaciones
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="product-tabs">
        <div className="tab-navigation">
          <button className="tab-button active">
            Especificaciones Técnicas
          </button>
          {/* <button className="tab-button">Reviews</button> */}
        </div>

        <div className="tab-content">
          <table className="specs-table">
            <tbody>
              <tr>
                <th>Voltage</th>
                <td>300VAC or VDC</td>
              </tr>
              <tr>
                <th>Velocidad Nominal de Propagación</th>
                <td>70%</td>
              </tr>
              <tr>
                <th>Temperatura de Operación</th>
                <td>-20°C a 60°C</td>
              </tr>
              <tr>
                <th>Temperatura de Almacenamiento</th>
                <td>-20°C a 80°C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
