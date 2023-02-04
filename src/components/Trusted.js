import React from 'react'
import styled from 'styled-components'

const Trusted = () => {
  return (
    <>
      <Wrapper>
        <div className="container-fluid bg-light p-5 mt-5 ">
          <div className="row trusted">
            <div className="col-lg-12 text-center"> <h2>Our Partners</h2>
              <p>Trusted 1000+ Partners</p>
            </div>
            <div className="col-lg-12 mt-3">
              <div className="our-clients">
                <ul>
                  <div className="row me-md-3">
                    <div className="col-6 col-lg-2 col-md-3 col-sm-4">
                      <li> <img src="images/1.png" alt="" /> <img src="images/1-1.jpeg" alt="" /> </li>
                    </div>
                    <div className="col-6 col-lg-2 col-md-3 col-sm-4">
                      <li> <img src="images/2.png" alt="" /> <img src="images/2-2.jpeg" alt="" /> </li>

                    </div>
                    <div className="col-6 col-lg-2 col-md-3 col-sm-4">
                      <li> <img src="images/3.png" alt="" /> <img src="images/3-3.jpeg" alt="" /> </li>
                    </div>
                    <div className="col-6 col-lg-2 col-md-3 col-sm-4">
                      <li> <img src="images/4.png" alt="" /> <img src="images/4-4.jpeg" alt="" /> </li>

                    </div>
                    <div className="col-6 col-lg-2 col-md-3 col-sm-4">
                      <li> <img src="images/5.png" alt="" /> <img src="images/5-5.jpeg" alt="" /> </li>
                    </div>
                    <div className="col-6 col-lg-2 col-md-3 col-sm-4">
                      <li> <img src="images/6.png" alt="" /> <img src="images/6-6.jpeg" alt="" /> </li>

                    </div>

                  </div>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
.our-clients {
	width: 100%;
	height: auto;
	text-align: center;
}

.our-clients ul {
	padding: 0;
	margin: 0;
}

.our-clients ul li {
	list-style: none;
	display: inline-block;
	width:180px;
	height:100px;
	position: relative;
	overflow: hidden;
	cursor:pointer;
	box-shadow: 0px 0px 10px -7px #555;
	transition: .5s;
}

.our-clients ul li img {
	width: 100%;
	height: 100%;
}
.our-clients ul li img:nth-child(1) {
	transform: translateY(0);
	transition: .5s;
}
.our-clients ul li img:nth-child(2) {
	transform: translateY(0);
	transition: .5s;
}




.our-clients ul li:hover img:nth-child(1) {
	transform: translateY(-100%);
	transition: .5s;
}
.our-clients ul li:hover img:nth-child(2) {
	transform: translateY(-100%);
	transition: .5s;
}

.trusted h2{
   font-weight: bold;
   color: rgb(63, 43, 179);

}
.trusted p{
   color: rgb(78, 78, 78);
   font-size: 14px;
   font-weight: 500;

}
`

export default Trusted