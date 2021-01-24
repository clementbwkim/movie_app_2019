import React from 'react';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <h1 className="footer-title">Clement</h1>
        <ul className="footer-info-wrapper">
          <li className="about"><a href="">About</a></li>
          <li className="service"><a href="">Service</a></li>
          <li className="company"><a href="">Company</a></li>
          <li className="join-us"><a href="">Join us</a></li>
        </ul>
        <div className="footer-contacts">
          <span className="instagram"><a href="">Instagram</a></span>
          <span className="facebook"><a href="">Facebook</a></span>
          <span className="Twitter"><a href="">Twitter</a></span>
        </div>
        <p>Copyrightⓒ2021 Clement BW</p>
      </div>
    </>
  )
}

export default Footer;

