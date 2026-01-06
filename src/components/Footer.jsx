import React from "react";
import "./Footer.css"; // aquí pondrás tu CSS
import logoDs3 from "../assets/ds3logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Columna 1: Logo y contacto */}
          <div className="footer-col">
            <img
              src={logoDs3}
              alt="DS3 Comunicaciones"
              className="footer-logo"
            />

            <div className="footer-section">
              <h3>Redes Sociales</h3>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="https://wa.me/994428965?text=Hola nesecito ayuda" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Correo</h3>
              <a href="mailto:netperu100@hotmail.com" className="footer-email">
                <i className="fas fa-envelope"></i> netperu100@hotmail.com
              </a>
            </div>
          </div>

          {/* Columna 2: Soluciones */}
          <div className="footer-col">
            <h3>Soluciones</h3>
            <ul className="footer-list">
              <li><a href="https://www.ds3comunicaciones.com/l-com/AccessPoint.html" target="_blank" rel="noopener noreferrer">Access Point</a></li>
              <li><a href="https://www.ds3comunicaciones.com/lcom/AntenasMIMO.html" target="_blank" rel="noopener noreferrer">Antenas MIMO</a></li>
              <li><a href="https://www.ds3comunicaciones.com/l-com/AntenasPanel.html" target="_blank" rel="noopener noreferrer">Antenas de Panel</a></li>
              <li><a href="https://www.ds3comunicaciones.com/l-com/AntenaSectorial.html" target="_blank" rel="noopener noreferrer">Antenas Sectoriales</a></li>
              <li><a href="https://ds3comunicaciones.com/l-com/pigtail/Pigtail.html" target="_blank" rel="noopener noreferrer">Cable Pigtail</a></li>
              <li><a href="https://www.ds3comunicaciones.com/trendnet/MediaConvert.html" target="_blank" rel="noopener noreferrer">Media Converter</a></li>
            </ul>
          </div>

          {/* Columna 3: Soporte */}
          <div className="footer-col">
            <h3>Soporte</h3>
            <ul className="footer-list">
              <li><a href="https://www.ds3comunicaciones.com/soporte.html" target="_blank" rel="noopener noreferrer">Soporte Técnico</a></li>
              <li><a href="https://ds3comunicaciones.com/us.html" target="_blank" rel="noopener noreferrer">Acerca de Nosotros</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="footer-col">
            <h3>Contacto</h3>
            <div className="footer-contact">
              <a href="https://wa.me/994428965?text=Hola nesecito ayuda" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-phone-alt"></i> 994 428 965
              </a>
              <a href="https://wa.me/996533223?text=Hola nesecito ayuda" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-phone-alt"></i> 996 533 223
              </a>
            </div>

            <div className="footer-hours">
              <h4>Horario de Atención</h4>
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábados: 9:00 - 13:00</p>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="footer-bottom">
          <p>&copy; 2023 DS3 Comunicaciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
