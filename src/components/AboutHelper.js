import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const AboutHelper = () => {
  return (
    <>
    <Wrapper>
         <section className="about-section">
        <div className="container">
          <div className="row">                
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">Tech Store Transform</span>
                  <h2>We are Import Branded Items to satisfy our clients.</h2>
                </div>
                <div className="text">I am Rauf Iqbal works at ReactJs. We are here to provide touch notch solution for your website or web application that helps you to make your website look attractive &amp; efficient in handling by creating usefull plugins thats you need.</div>
                <div className="text">
                  We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website. where you can find many good quality content related to web development and tutorials about plugins. here we are using html, html5, css, css3, jquery &amp; javascript along with inspirational UI design layout by professionals by using Photoshop and adobe allustrator.
                </div>
                <NavLink to="/contact">
                <div className="btn-box">
                  <span  className="theme-btn btn-style-one btn">Contact Us</span>
                </div>
                </NavLink>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 d-none d-sm-none d-lg-block d-md-none ">
              <div className="inner-column wow fadeInLeft">
                <div className="author-desc">
                  <h2>Rauf Iqbal</h2>
                  <span>Web Developer</span>
                </div>
                <figure className="image-1"><span className="lightbox-image" data-fancybox="images">
                <img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt=""  /></span></figure>
              </div>
            </div>
            
            <div className="mb-5 d-sm-block d-block d-lg-none d-md-block image-column-mobile col-lg-6 col-md-12 col-sm-12">
             <h1>Our Warehouse</h1>
              <div className="inner-column-mobile wow fadeInLeft">
                
               
                
                <figure className="image-1"><span className="lightbox-image" data-fancybox="images">
                <img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt=""  /></span></figure>
              </div>
            </div>

            
          </div>
          <div className="sec-title mt-5">
            <span className="title text-center">Our Future Goal</span>
            <h2>We want to lead in innovation &amp; Technology</h2>
          </div>
          <div className="text">
            We works on UI/UX and functionality as well so that a plugins comes with proper stucture &amp; stunning looks which suits to your web app &amp; website.
          </div>
          <div className="text">
            We take a small toolkit here and ride it well so that it is fit for your use. One who performs well and looks even better.
          </div>
          <div className="text">                
            Here we are trying to give you all kinds of technical content, whether it is related to designing or functionality. We are creating content on a lot of languages and will continue to make it free of cost even if you use it without any problem. Which is a very important thing.
          </div>
          <div className="text">
            Here you can also share the content you create, if our technical team likes it, then we will also share it on our blog.
          </div>
          <div className="text">
            In the end, I would say keep visiting our website and enjoy the quality content.
          </div>
        </div>
      </section>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
h1,
h2,
h3,
h4,
h5,
h6 {}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  outline: none;
}

a,
a:active,
a:focus {
  color: #6f6f6f;
  text-decoration: none;
  transition-timing-function: ease-in-out;
  -ms-transition-timing-function: ease-in-out;
  -moz-transition-timing-function: ease-in-out;
  -webkit-transition-timing-function: ease-in-out;
  -o-transition-timing-function: ease-in-out;
  transition-duration: .2s;
  -ms-transition-duration: .2s;
  -moz-transition-duration: .2s;
  -webkit-transition-duration: .2s;
  -o-transition-duration: .2s;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

section {
  margin-top:150px;
  padding: 60px 0;
  /* min-height: 100vh;*/
}

.sec-title {
  position: relative;
  z-index: 1;
  margin-bottom: 60px;
}

.sec-title .title {
  position: relative;
  display: block;
  font-size: 18px;
  line-height: 24px;
  color: rgb(63, 43, 179);
  font-weight: 500;
  margin-bottom: 15px;
}

.sec-title h2 {
  position: relative;
  display: block;
  font-size: 40px;
  line-height: 1.28em;
  color: #222222;
  font-weight: 600;
  padding-bottom: 18px;
}

.sec-title h2:before {
  position: absolute;
  content: '';
  left: 0px;
  bottom: 0px;
  width: 50px;
  height: 3px;
  background-color: #d1d2d6;
}

.sec-title .text {
  position: relative;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
  margin-top: 35px;
}

.sec-title.light h2 {
  color: #ffffff;
}

.sec-title.text-center h2:before {
  left: 50%;
  margin-left: -25px;
}

.list-style-one {
  position: relative;
}

.list-style-one li {
  position: relative;
  font-size: 16px;
  line-height: 26px;
  color: #222222;
  font-weight: 400;
  padding-left: 35px;
  margin-bottom: 12px;
}

.list-style-one li:before {
  content: "\f058";
  position: absolute;
  left: 0;
  top: 0px;
  display: block;
  font-size: 18px;
  padding: 0px;
  color: #ff2222;
  font-weight: 600;
  -moz-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1.6;
  font-family: "Font Awesome 5 Free";
}

.list-style-one li a:hover {
  color: rgb(63, 43, 179);
}

.btn-style-one {
  position: relative;
  display: inline-block;
  font-size: 17px;
  line-height: 30px;
  color: #ffffff;
  padding: 10px 30px;
  font-weight: 600;
  overflow: hidden;
  letter-spacing: 0.02em;
  background-color: rgb(63, 43, 179);
}

.btn-style-one:hover {
  border: 1px solid rgb(74, 58, 161);
  background-color: transparent;
  color: rgb(74, 58, 161);
}

.about-section {
  position: relative;
  padding: 20px 0 20px;
}

.about-section .sec-title {
  margin-bottom: 45px;
}

.about-section .content-column {
  position: relative;
  margin-bottom: 50px;
}

.about-section .content-column .inner-column {
  position: relative;
  padding-left: 30px;
}

.about-section .text {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 26px;
  color: #848484;
  font-weight: 400;
}

.about-section .list-style-one {
  margin-bottom: 45px;
}

.about-section .btn-box {
  position: relative;
}

.about-section .btn-box a {
  padding: 15px 50px;
}

.about-section .image-column {
  position: relative;
}

.about-section .image-column .text-layer {
  position: absolute;
  right: -110px;
  top: 50%;
  font-size: 325px;
  line-height: 1em;
  color: #ffffff;
  margin-top: -175px;
  font-weight: 500;
}

.about-section .image-column .inner-column {
  position: relative;
  padding-left: 80px;
  padding-bottom: 0px;
}

.about-section .image-column .inner-column .author-desc {
  position: absolute;
  bottom: 16px;
  z-index: 1;
  background-color: rgb(74, 58, 161);
  padding: 10px 15px;
  left: 96px;
  width: calc(100% - 152px);
  border-radius: 50px;
}

.about-section .image-column .inner-column .author-desc h2 {
  font-size: 21px;
  letter-spacing: 1px;
  text-align: center;
  color: #fff;
  margin: 0;
}

.about-section .image-column .inner-column .author-desc span {
  font-size: 16px;
  letter-spacing: 6px;
  text-align: center;
  color: #fff;
  display: block;
  font-weight: 400;
}

.about-section .image-column .inner-column:before {
  content: '';
  position: absolute;
  width: calc(50% + 80px);
  height: calc(100% + 160px);
  top: -80px;
  left: -3px;
  background: transparent;
  z-index: 0;
  border: 44px solid rgb(74, 58, 161);
}





.about-section .image-column .image-1 {
  position: relative;
}

.about-section .image-column .image-2 {
  position: absolute;
  left: 0;
  bottom: 0;
}

.about-section .image-column .image-2 img,
.about-section .image-column .image-1 img {
  box-shadow: 0 30px 50px rgba(8, 13, 62, .15);
  border-radius: 46px;
}

.about-section .image-column .video-link {
  position: absolute;
  left: 70px;
  top: 170px;
}

.about-section .image-column .video-link .link {
  position: relative;
  display: block;
  font-size: 22px;
  color: #191e34;
  font-weight: 400;
  text-align: center;
  height: 100px;
  width: 100px;
  line-height: 100px;
  background-color: #ffffff;
  border-radius: 50%;
  box-shadow: 0 30px 50px rgba(8, 13, 62, .15);
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.about-section .image-column .video-link .link:hover {
  background-color: #191e34;
  color: #fff;
}
`

export default AboutHelper