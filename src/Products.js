import { React, useState, useEffect } from "react";
import styled from "styled-components";
// import MainProduct from "./components/MainProduct";

const Products = () => {
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


  return <>

    <Wrapper>
      <div className="container">
        <div className="row">

          <div className="col-lg-2 mt-2">
            <div className="togglearea d-lg-none d-block d-sm-block d-md-block  ">
              <label htmlFor="toggle">
                <i className="fa-solid fa-bars"></i>
              </label>

            </div>
            <input type="checkbox" id="toggle" />
            <div className="dabba">
              <div className="input-group flex-nowrap mt-3">
                <input type="text" className="form-control" placeholder="Search Items"
                  aria-label="Username" aria-describedby="addon-wrapping"
                  
                />
              </div>

              <ul className="list-group mt-3 main-products text-start">
                <li className="list-group-item border-0 h5 nav-item">Category</li>
                <a href="./products.js" className="nav-link"><li className="list-group-item border-0 h6">All</li></a>
                <a href="./products.js" className="nav-link"><li className="list-group-item border-0 h6"
                
                >Mobile</li></a>
                <a href="./products.js" className="nav-link"><li className="list-group-item border-0 h6">Laptop</li></a>
                <a href="./products.js" className="nav-link"><li className="list-group-item border-0 h6">Computer</li></a>
                <a href="./products.js" className="nav-link"><li className="list-group-item border-0 h6">Accessories</li></a>
                <a href="./products.js" className="nav-link"><li className="list-group-item border-0 h6">Watch</li></a>
              </ul>
              <ul className="list-group mt-3">
                <li className="list-group-item border-0 h5 ">Company</li>
                <select className="form-select" aria-label="Default select example">
                  <option defaultValue="Select Company" >Select Company</option>
                 {
                   product.map((curElem, id)=>{
                    return(
                  <option value="1" key={id}>{curElem.company}</option>

                    )
                  })
                 }

                </select>
              </ul>


              <ul className="list-group mt-3">
                <li className="list-group-item border-0 h5 m-0 ">Colors</li>
                <li className="list-group-item border-0 h5 ">
                  <div className="colors ">
                    <div className="c-blue me-3"><span></span></div>
                    <div className="c-red me-3"><span></span></div>
                    <div className="c-white me-3"><span></span></div>
                    <div className="c-green"><span></span></div>
                  </div>
                </li>


              </ul>

              <ul className="list-group mt-3">
                <li className="list-group-item border-0 h5 m-0 slider ">Price Range</li>
                <input type="range" className="form-range" min="100" max="10000" id="customRange2"></input>
                <button className="btn btn-primary mt-4">Clear Filter</button>
              </ul>
            </div>



          </div>
          <div className="col-lg-10">
            <div className="container mt-5">
              <div className="row">
                {
                  product.map((curElem, id) => {
                    return (
                      <div className="col-lg-4 col-sm-12 col-md-6 ps-4 col-12 mt-3" key={id}>

                        <div className="card">
                          <figure>
                            <img src={curElem.image}
                              alt="t-shirt" />
                          </figure>
                          <section className="details">
                            <div className="min-details">
                              <h1>{curElem.name} <span>{curElem.company}</span></h1>
                              <h1 className="price">{curElem.price}</h1>
                            </div>

                            <div className="options">
                              <div className="options-colors">
                                <h1>colors</h1>
                                <ul>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                </ul>
                              </div>
                            </div>
                            <button className="btn">add to cart</button>
                          </section>
                        </div>
                      </div>
                    )
                  })
                }





              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </>

};


const Wrapper = styled.section`
div.s-blue span{background:#fff;width:14px;
	height:14px; 
	border:1px solid #e8e9eb;}
div.s-red span{background:#fff;	width:14px;
	height:14px; 
	border:1px solid #e8e9eb; }
div.s-green span{background:#fff;	width:14px;
	height:14px; 
	border:1px solid #e8e9eb;}
div.s-white span{
	background:#fff;
	width:14px;
	height:14px; 
	border:1px solid #e8e9eb;
}
div.colors div{
	/* margin-top:3px; */
	width:15px; 
	height:15px; 	
	margin-right:5px;
	float:left;
  
}

.form-range[type="range"]::-webkit-slider-thumb {
	-webkit-appearance: none !important;
	width: 20px;
	height:20px;
	background: rgb(63,43,179) !important;
	border: 2px solid rgb(63,43,179) !important	;
	border-radius: 50%;
	cursor: pointer;
	}
	.form-range[type="range"]::-webkit-slider-thumb:hover {
	background: rgb(63,43,179) !important;
	}
	.form-range:focus{
		border-color: red !important; 
		box-shadow: none !important;
	}
div.colors div span{
	width:20px; 
	height:20px; 
	display:block;
	border-radius:50%;
}
div.colors div span:hover{
	width:20px;
	height:20px;
	/* margin:-1px 0 0 -1px; */
  cursor: pointer;
}
div.c-blue span{background:#6e8cd5;}
div.c-red span{background:#f56060;}
div.c-green span{background:#44c28d;}
div.c-white span{
	background:#fff;
	width:14px;
	height:14px; 
	border:1px solid #e8e9eb;
}
.main-products .h5{
  font-size: 1.3rem !important;

}
.h5{
  font-size: 1.3rem;
}
.main-products li{
  font-size: 1.1rem !important;
  font-weight: 500;
  transition: 0.4s linear;
}
.main-products li:hover{
	color: rgb(63,43,179);
}

.input-group>.form-control:focus, .input-group>.form-floating:focus-within, .input-group>.form-select:focus {
    border-color:1px solid ghostwhite !important;
    z-index: 5;
    box-shadow: none;
}

.form-control:focus {
    color: #212529;
    background-color: #fff;
    border-color: #808080 !important;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

.form-select:focus {
    border-color:  #bbbbbb !important;
    outline: 0;
    box-shadow: none !important;
}
#toggle{
	display: none;
}

.togglearea i{
	border: 1px solid rgb(179, 179, 179);
	padding: 10px 15px;
	font-size: 1.4rem;
	cursor: pointer;
	border-radius: 10px;
}
.togglearea label{
	background-color: white;
	height: 45px;
	width: 45px;
	height: auto !important;
		transition:transform 0.3s;
		transform: translate(0px,2px);	
}

@media screen and (max-width:850px) {
	.dabba{
		flex-direction: column;
		display: none;
	}
	#toggle:checked + .dabba{
		display: block;
		}
}

h1 {
    font-size: 1.2rem;
    text-transform: capitalize;
}

.card {
    position: relative;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
    height: 300px;
    overflow: hidden;
    width: 300px;
}

.card > figure {
    width: 90%;
    margin: 20px auto 0 auto;
}

.card > figure > img {
    width: 100%;
}

.details {
    background-color: #FFF;
    border-radius: 10px;
    padding: 20px;
    position: absolute;
    top: 76%;
    width: 100%;
    transition: box-shadow .3s ease-in-out,
                top .3s ease-in-out;
}

.card:hover .details {
    box-shadow: 0 -5px 10px rgba(0,0,0,0.3);
    top: 20%;
}

.details > .min-details,
.details > .options,
.details > .options > .options-size,
.details > .options > .options-colors {
    margin-bottom: 20px;
}

.details > .min-details {
    display: flex;
    justify-content: space-between;
}

.details > .min-details > h1 > span {
    color: #7B7B7B;
    display: block;
    font-size: .9rem;
    font-weight: 400;
}

.details > .options h1 {
    margin-bottom: 5px;
}

.details > .options ul {
    list-style-type: none;
    display: flex;
}

.details > .options ul li {
    border-radius: 50%;
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    margin-right: 5px;
    text-align: center;
    width: 30px;
}

.options-size > ul > li {
    background-color: rgba(0,0,0,0.5);
    color: #FFF;
    font-size: .7rem;
    font-weight: 900;
    text-transform: uppercase;
    transition: background-color .3s ease-in-out;
}

.options-size > ul > li:hover {
    background-color: #192a56;
}

.options-colors > ul > li {
    border: none;
}

.options-colors > ul > li:nth-child(1) {
    background-color: #FF1;
}

.options-colors > ul > li:nth-child(2) {
    background-color: #000;
}

.options-colors > ul > li:nth-child(3) {
    background-color: #FB0000;
}

.options-colors > ul > li:nth-child(4) {
    background-color: #FF69B4;
}

.options-colors > ul > li:nth-child(5) {
    background-color: #192a56;
}

.btn {
    background-color: rgb(63,43,179);
    border-radius: 5px;
    color: #FFF;
    display: block;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    width: 100%;
    transition: box-shadow .3s ease-in-out,
                transform .3s ease-in-out;
}

.btn:hover {
	border: 1px solid rgb(63,43,179);
	color: rgb(63,43,179);
  box-shadow: 0 5px 10px rgba(0,0,0,.3);
  transform: translateY(-2px);
  background-color:white;
}
`


export default Products;
