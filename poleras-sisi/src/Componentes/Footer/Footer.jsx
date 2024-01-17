import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Email: info@Poleras-SiSi.com</p>
          <p>Teléfono: (56) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/category/poleras">Poleras</a></li>
            <li><a href="/category/polerones">Polerones</a></li>
            <li><a href="/category/otros">Otros</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Poleras-SiSi. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;