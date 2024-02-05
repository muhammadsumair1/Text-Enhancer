import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Props are used to pass data from a parent component to a child component
export default function Navbar(props) {
  return (
        //in the below class we can add '{}' and change inverted commas to this(``) for write javascript
    <>
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" > Home </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch">
       <input className="form-check-input" onClick={props.changemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             {/*in the given below short if/else statement is used to change the text color 
             if(props.mode === 'light'){props.mode==='dark'}else{props.mode==='light'}*/}
       <label className={`form-check-label text-${props.mode === "light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
    </>
  )
};
Navbar.propTypes = {title:PropTypes.string,}
// Navbar.propTypes = {title:PropTypes.string.isRequired,}

Navbar.defaultProps = {title: 'Set title' ,}; 