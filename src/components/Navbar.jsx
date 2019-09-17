import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <a className="navbar-brand" href="Javascript:Void(0)">
      <h3>
        Text<strong>Translator</strong>
      </h3>
    </a>
    <select className="form-control-sm">
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Espanol</option>
    </select>
  </nav>
);

export default Navbar;
