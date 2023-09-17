import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return<>
    <nav className="navbar navbar-expand-lg bg-body-secondary" data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand fs-2" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
}
