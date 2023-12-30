import React, { useState, useEffect } from 'react';
import "./Nav.css"

const Nav = () => {
  const [showCart, setShowCart] = useState(false);


  const toggleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    if (showCart) {
      document.body.classList.add('stop-scrolling');
    } else {
      document.body.classList.remove('stop-scrolling');
    }

    return () => {
      document.body.classList.remove('stop-scrolling');
    };
  }, [showCart]);


  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-light custom-height">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              WeRev
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <div className='spacing'>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active bg-light" aria-current="page" href="/">
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active bg-light" href="/">
                      X1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active bg-light" href="/">
                      M1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active bg-light" href="/">
                      OUR STORY
                    </a>
                  </li>

                  <li className="nav-item ">
                    <a className="nav-link active bg-light" href="/">
                      CONTACT
                    </a>
                  </li>

                </ul>
              </div>
              </div>


              <div id="form-container">
              
                <button className="nav-button btn btn-light" onClick={toggleCart}>
                  🛒
                </button>
                {showCart && (
                  <div id="cart" className='cart-scrollable-content'>
                    {/* Cart content goes here */}
                    Cart Content
                    <button onClick={toggleCart} id="close-cart-button">
                      &#10006;
                    </button>
                  </div>
                )}
              </div>
            </div>

        </nav>
      </div>
    </div>
  );
}

export default Nav;
