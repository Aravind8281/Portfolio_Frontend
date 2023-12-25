import React from "react";
import { Link } from "react-router-dom";
import './Assets/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
function Sidebar() {
  return (
    <div className="s-container">
      <div className="c-container">
      <Link to="/">
          <div className="i-container">
              <FontAwesomeIcon className="icon" icon={faHome} />
              <p className="icon-name"> Home </p>
          </div>
          </Link>
        <Link to="/certificates">
          <div className="i-container">
              <FontAwesomeIcon className="icon" icon={faCertificate} />
              <p className="icon-name"> Certificates </p>
          </div>
          </Link>
        <Link to="/contact">
          <div className="i-container">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            <p className="icon-name"> Contact </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
