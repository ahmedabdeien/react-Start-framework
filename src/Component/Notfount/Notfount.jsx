import React from 'react'
import style from './notfount.module.css'
export default function Notfount() {
  return <>
  <section className='  w-100 vh-100 d-flex justify-content-center align-items-center'>
    <div className='container d-flex justify-content-center align-items-center'>
      <div className={style.width20}>
      <i className={`bi bi-file-earmark-excel ${style.fontSize70px}`}></i>
      </div>
    <div className=' w-50'>
      <h2 className=' fs-1'>Page Not Found</h2>
      <p className=' fs-5 text-black-50'>We couldn't find what you were looking for.</p>
      <p className=' fs-5'>Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
    </div>
    </div>
  </section>
  </>
}
