import React from 'react'
import styleFooter from './Footer.module.css'

export default function Footer() {
  return (
    <footer className=' bg-dark text-white text-center'>
      <div className="container py-5">
        <div className="row">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <div className="">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
        </div>
       </div>
       <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <div className="">
        <h3>AROUND THE WEB</h3>
        <div className='d-flex justify-content-center align-items-center text-white'>
          <div className={styleFooter.width}><i className="fa-brands fa-facebook-f"></i></div>
          <div className={styleFooter.width}><i className="bi bi-twitter-x"></i></div>
          <div className={styleFooter.width}><i className="bi bi-linkedin"></i></div>
          <div className={styleFooter.width}><i className="bi bi-globe-central-south-asia"></i></div>
        </div>
        </div>
       </div>
       <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <div className="">
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
       </div>
        </div>
      </div>
      <div className="bg-black text-center p-2"><p>Copyright © Your Website 2021</p></div>
    </footer>
  )
}
