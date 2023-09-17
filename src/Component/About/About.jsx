import React from 'react'
import styleAbout from './About.module.css'

export default function About() {
  return<>
  <section className={styleAbout.bgColor}>
  <div className="container py-5">
    <div className=' text-center'>
      <h2 className='fw-bold'>ABOUT COMPONENT</h2>
    </div>
    <div className="d-flex justify-content-center align-items-center">
      <div className={styleAbout.lineOne}></div>
      <i className="bi bi-asterisk"></i>
      <div className={styleAbout.lineOne}></div>
    </div>
    <div className="row py-5">
      <div className="col-lg-6 col-md-6">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
      <div className="col-lg-6 col-md-6">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
  </div>
  </section>
  
  </>
}
