import { React, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FeatureProduct = () => {
  const [product, setproduct] = useState([])
  useEffect(() => {
    fetch(`${"https://api.pujakaitem.com/api/products"}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' }
    }).then(res => res.json()).then((response) => {
      var temp = []
      temp = response;
      setproduct(temp)
    }).catch((error) => {
      console.log("error", error)
    })

  }, [])

  return (
    <>
      <Wrapper>
        <div className="container bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
          <h2 className='text-center mt-4'>Featured Products</h2>
          <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-3 g-4 mt-4">

            {
              product.filter(product => product.featured === true).map((curElem, id) => {
                return (
                  <>
                    <NavLink to="/singleproduct">


                      <div className="col hp" key={id}>
                        <div className="card h-100 shadow-sm">

                          <img src={curElem.image} className="card-img-top" alt="product.title" />

                          <div className="label-top shadow-sm">
                            <span className="text-dark">{curElem.company}</span>
                          </div>
                          <div className="card-body">
                            <div className="clearfix mb-3">
                              <span className="float-start badge rounded-pill bg-success">{curElem.price}</span>
                              <span className="float-end">
                                <span className="small text-muted text-uppercase aff-link">{curElem.category}</span>
                              </span>
                            </div>
                            <h5 className="card-title">
                              <span target="_blank" href="#"></span>
                            </h5>
                            <div className="d-grid gap-2 my-4">
                              <span className="btn btn-warning bold-btn">add to cart</span>
                            </div>
                            <div className="clearfix mb-1">
                              <span className="float-start"><i className="fas fa-question-circle" /></span>
                              <span className="float-end">
                                <i className="far fa-heart " style={{ cursor: 'pointer' }} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </>
                )
              })
            }




          </div>
        </div>
      </Wrapper>


    </>
  )
}

const Wrapper = styled.section`
:root {
  --font1: 'Heebo', sans-serif;
  --font2: 'Fira Sans Extra Condensed', sans-serif;
  --font3: 'Roboto', sans-serif;

  --btnbg: rgb(63, 43, 179) !important;
  --btnfontcolor: white;
  --btnfontcolorhover: rgb(63, 43, 179);
  --btnbghover: white;
  --btnfonthover: rgb(63, 43, 179);
  --btnactivefs: white;


  --label-index: rgb(63, 43, 179);
  --danger-index: #5bc257 !important;
  /* PAGINATE */
  --link-color: white;
  --link-color-hover: #fff;
  --bg-content-color: white;

}

h2 {
  color: rgb(78, 78, 78);
  font-size: 1.6rem;
}

.card {
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);

  transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
  border: 0;
  border-radius: 1rem;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(1rem - 1px);
  border-top-right-radius: calc(1rem - 1px);
}


.card h5 {
  overflow: hidden;
  height: 55px;
  font-weight: 300;
  font-size: 1rem;
}

.card h5 a {
  color: white;
  text-decoration: none;
}

.card-img-top {
  width: 100%;
  min-height: 250px;
  max-height: 250px;
  object-fit: contain;
  padding: 30px;
}

.card h2 {
  font-size: 1rem;
}


.card:hover {
  box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;
-webkit-box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;
-moz-box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;
}

/* Centered text */
.label-top {
  position: absolute;
  background-color: rgb(63, 43, 179) !important;
  color: #fff !important;
  top: 8px;
  right: 8px;
  padding: 5px 10px 5px 10px;
  font-size: .7rem;
  font-weight: 600;
  border-radius: 3px;
  text-transform: uppercase;
}

.label-top span {
  color: white !important;
}

.top-right {
  position: absolute;
  top: 24px;
  left: 24px;

  width: 90px;
  height: 90px;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 900;
  line-height: 90px;
  text-align: center;
  color: white;
}

.top-right span {
  display: inline-block;
  vertical-align: middle;
}

.aff-link {
  font-weight: 500;
}


.bold-btn {

  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 5px 50px 5px 50px;
}

.box .btn {
  font-size: 1.5rem;
}

@media (max-width: 1025px) {
  .btn {
    padding: 5px 40px 5px 40px;
  }
}

@media (max-width: 250px) {
  .btn {
    padding: 5px 30px 5px 30px;
  }
}

/* START BUTTON */
.btn-warning {
  background-color:rgb(63, 43, 179);
  color: white;
  fill: #ffffff;
  border: none;
  text-decoration: none;
  outline: 0;
  border-radius: 100px;
}

.btn-warning:hover {
  background: var(--btnbghover);
  color: var(--btnfontcolorhover);
  border: 1px solid rgb(63, 43, 179);
}

.btn-check:focus+.btn-warning,
.btn-warning:focus {
  background: var(--btnbghover);
  color: var(--btnfontcolorhover);

}

.btn-warning:active:focus {
  box-shadow: 0 0 0 0.25rem var(--btnactivefs);
}

.btn-warning:active {
  background: var(--btnbghover);
  color: var(--btnfontcolorhover);
}

/* END BUTTON */

.bg-success {
  font-size: 1rem;
  background-color: rgb(63, 43, 179) !important;
  color:white!important;
}

.bg-danger {
  font-size: 1rem;
}


.price-hp {
  font-size: 1rem;
  font-weight: 600;
  color: darkgray;
}

.amz-hp {
  font-size: .7rem;
  font-weight: 600;
  color: darkgray;
}

.fa-question-circle:before {
  /* content: "\f059"; */
  color: rgb(63, 43, 179) !important;
}

.fa-heart {
  color: rgb(63, 43, 179) !important;
}

.fa-chevron-circle-right:before {
  color: rgb(63, 43, 179) !important;
}


`

export default FeatureProduct