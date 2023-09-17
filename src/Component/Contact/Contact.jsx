import React from 'react'
import style from './Contact.module.css'

export default function Contact() {
  return <>
  <section className='py-4'>
    <div className="container w-75">
    <div className=' text-center '>
      <h2 className='fw-bold'>CONATCT SECTION</h2>
    </div>
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className={style.lineOne}></div>
      <i className="bi bi-asterisk"></i>
      <div className={style.lineOne}></div>
    </div>
        <form>
  {/*<!-- Email input -->*/}

      <div className="form-outline my-2">
        <input type="text" id="form3Example1" className="form-control" />
        <label className="form-label" for="form3Example1">Name:</label>
      </div>
 
      <div className="form-outline my-2">
        <input type="text" id="form3Example2" className="form-control" />
        <label className="form-label" for="form3Example2">Age:</label>
      </div>

  {/* <!-- Email input --> */}
  <div className="form-outline my-2">
    <input type="email" id="form3Example3" className="form-control" />
    <label className="form-label" for="form3Example3">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline my-2">
    <input type="password" id="form3Example4" className="form-control" />
    <label className="form-label" for="form3Example4">Password</label>
  </div>

  {/* <!-- Checkbox --> */}
  <div className="form-check d-flex justify-content-start mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
    <label className="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
</form>
    </div>
  </section>


  </>
}
