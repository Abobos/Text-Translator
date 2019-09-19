import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-brand">
      <i className="fa fa-book" />
      <strong>TextTranslator</strong>
    </Link>
    <select className="form-control-sm">
      <option value="en">English</option>
      <option value="fr">French</option>
      <option value="es">Espanol</option>
    </select>
  </nav>
);

export default Navbar;
