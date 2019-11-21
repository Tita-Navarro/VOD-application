import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav-item">
          <img src={require('../images/VOD-app.png')} alt='brand-home' className='brand-home'/>  
          <Link to="/Watched" className="btn-history">
            History
          </Link>
          <Link to="/Home" className="btn-home">
            Home
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
