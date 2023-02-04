import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
      <Naviga>
        <nav className="navbar navbar-expand-lg container-fluid ">

          <NavLink className="navbar-brand mx-3" to="/">
            <img src="./images/logo.png" className='img-fluid' alt="" width="120" />
          </NavLink>
          <button className="navbar-toggler togglebtn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse mx-4" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link me-3" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3" to="/contact">Contact</NavLink>
              </li>
              {/* <NavLink className="nav-link .cart" to="/cart">

              <li className="nav-item">
                  <span className='count'>10</span>

                  <FiShoppingCart className='material-icons' />
              </li>
              </NavLink> */}
              

            </ul>
          </div>

        </nav>
      </Naviga>
    </>


  )
};

const Naviga = styled.nav`
background-color:#F5F5F5;
font-size: 18px;
.togglebtn{
  background-color:white !important;
  border-color:black !important;
  $:focus{
    border-color:black !important;
  }

}
.nav-link{
    color:#3f2bb3;
&:hover{
color:black;
}
}
.cart {
  position: relative;
  display: block;
  width: 28px;
  height: 28px;
  height: auto;
  overflow: hidden;
}

.count {
    position: absolute;
    top: 18px;
    right: 25px;
    z-index: 2;
    font-size: 11px;
    border-radius: 50%;
    background: #d60b28;
    width: 16px;
    height: 16px;
    line-height:16px;
    display: block;
    text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }
.totalCart{
    width:2.4rem;
    height:2.4rem;
    position:absolute;
    background-color: #000;
    color: #000;
    border-radius: 50%;
    display: grid;
    place-items: center;
}
.material-icons {
    position: relative;
    z-index: 1;
    font-size: 24px;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
    box-shadow: none !important;
}
`

export default Navbar