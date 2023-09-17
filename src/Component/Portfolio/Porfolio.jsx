import React, { useState } from 'react';
import PortOne from '../../Assets/images/port1.png'
import PortTwo from '../../Assets/images/port2.png'
import PortThree from '../../Assets/images/port3.png'
import stylePorfolio from './Portfolio.module.css';

export default function Portfolio() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  function addImage(src) {
    setEnlargedImage(src);
  }

  function closeImage() {
    setEnlargedImage(null);
  }

  return (
    <>
      <section className="">
        <div className="container py-4">
          <div className="text-center">
            <h2 className="fw-bold">PORTFOLIO COMPONENT</h2>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-4">
            <div className={stylePorfolio.lineOne}></div>
            <i className="bi bi-asterisk"></i>
            <div className={stylePorfolio.lineOne}></div>
          </div>

          <div className="row g-4">
            {/* Your image rendering code */}
            {[
              { src: PortOne },
              { src: PortTwo },
              { src: PortThree },
              { src: PortOne },
              { src: PortTwo },
              { src: PortThree },
            ].map((image, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={stylePorfolio.parntDiv}>
                  <div>
                    <img
                      src={image.src}
                      alt=""
                      className="img-fluid"
                      onClick={() => addImage(image.src)} // Pass the image source here
                    />
                  </div>
                  <div className={stylePorfolio.bgPortImg}>
                    <i
                      className="bi bi-file-earmark-image"
                      onClick={(e) => {
                        e.stopPropagation();
                        addImage(image.src); // Pass the image source here
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {enlargedImage && (
            <div
              id="div-prop"
              onClick={closeImage}
              className="big-layer d-flex justify-content-center align-items-center"
            >
              <div onClick={(e) => e.stopPropagation()} className="w-50 text-center">
                <img id="imageChange" src={enlargedImage} className="w-100" alt="" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

