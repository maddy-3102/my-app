import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
    <div classNameName="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Text Editor</Link></li>
              <li><Link className="dropdown-item" to="/">Image format</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/">Calculator</Link></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-info" type="submit">Search</button>
        </form>

      </div>
      <div className="form-check form-switch m-3">
           <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
           <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Light':'Dark'}-Mode</label>
        </div>
    </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
    }
Navbar.defaultProps = {
    title: 'Title',
    about: 'About'
}