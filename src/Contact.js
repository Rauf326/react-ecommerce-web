import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <>
    <Wrapper>
    
      <section className="contact-page-sexc">
        <div className="container">
          <div className="sec-title">
            <div className="title">Contact Us</div>
            <h2>Let's Get in Touch.</h2>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/*Form Column*/}
              <div className="form-column col-md-8 col-sm-12 col-xs-12">
                <div className="inner-column">
                  {/*Contact Form*/}
                  <div className="contact-form">
                    <form method="POST" action="https://formspree.io/f/mjvdgykp"  id="contact-form">
                      <div className="row clearfix">
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="name" placeholder="Name" required  />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="email" name="email"  placeholder="Email" required />
                        </div>
                          <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group col-md-6 col-sm-6 co-xs-12">
                          <input type="text" name="phone" placeholder="Phone" required />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <textarea name="message" placeholder="Massage" />
                        </div>
                        <div className="form-group col-md-12 col-sm-12 co-xs-12">
                          <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*End Contact Form*/}
                </div>
              </div>
              {/*Info Column*/}
              <div className="info-column col-md-4 col-sm-12 col-xs-12">
                <div className="inner-column">
                  <h2>Contact Info</h2>
                  <ul className="list-info">
                    <li><i className="fas fa-globe " />123 lorem ispum Abc, Street Chandigarh.</li>
                    <li><i className="far fa-envelope" />example@test</li>
                    <li><i className="fas fa-phone" />1-234-567-890 <br /> 1-234-567-890</li>
                  </ul>
                  <ul className="social-icon-four iconHover">
                    <li className="follow">Follow on: </li>
                    <li><i className="fab fa-facebook-f" /></li>
                    <li><i className="fab fa-twitter" /></li>
                    <li><i className="fab fa-google-plus-g" /></li>
                    <li><i className="fab fa-dribbble" /></li>
                    <li><i className="fab fa-pinterest-p" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
li,
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sec-title {
  position: relative;
  padding-bottom: 20px;
}

.sec-title .title {
  position: relative;
  color: rgb(63, 43, 179);
  font-size: 18px;
  font-weight: 700;
  padding-right: 50px;
  margin-bottom: 15px;
  display: inline-block;
  text-transform: capitalize;
}

.sec-title .title:before {
  position: absolute;
  content: '';
  right: 0;
  bottom: 7px;
  width: 40px;
  height: 1px;
  background-color: #bbb;
}

.sec-title h2 {
  position: relative;
  color: #252525;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.5em;
  display: block;
}

.sec-title.light h2 {
  color: #fff;
}

.contact-page-sexc {
  position: relative;
  padding-top: 20px;
  padding-bottom: 110px;
  background-color: white;
}

.contact-page-sexc .inner-container {
  position: relative;
  z-index: 1;
  background-color: rgb(63, 43, 179);
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, .1)
}

.contact-page-sexc .form-column {
  position: relative;
  padding: 0 0 0 15px;
}

.contact-page-sexc .form-column .inner-column {
  position: relative;
  padding: 60px 45px 30px;
  background-color: #fff;
}

.contact-page-sexc .info-column {
  position: relative;
}

.contact-page-sexc .info-column .inner-column {
  position: relative;
  padding: 60px 35px;
}

.contact-page-sexc .info-column h2 {
  position: relative;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.4em;
  margin-bottom: 45px;
}

.contact-page-sexc .info-column .list-info {
  position: relative;
  margin-bottom: 60px;
}

.contact-page-sexc .info-column .list-info li {
  position: relative;
  margin-bottom: 25px;
  font-size: 18px;
  color: #fff;
  line-height: 1.8em;
  padding-left: 45px;
}

.contact-page-sexc .info-column .list-info li:last-child {
  margin-bottom: 0;
}

.contact-page-sexc .info-column .list-info li i {
  position: absolute;
  left: 0;
  top: 8px;
  color: #fff;
  font-size: 30px;
}

.contact-form {
  position: relative;
}

.contact-form .form-group {
  position: relative;
  margin-bottom: 20px;
}

.contact-form input[type=text],
.contact-form input[type=email],
.contact-form textarea {
  position: relative;
  display: block;
  width: 100%;
  height: 60px;
  color: #222;
  font-size: 14px;
  line-height: 38px;
  padding: 10px 30px;
  border: 1px solid #ddd;
  background-color: #fff;
  transition: all .3s ease;
  -ms-transition: all .3s ease;
  -webkit-transition: all .3s ease;
}

.contact-form input[type=text]:focus,
.contact-form input[type=email]:focus,
.contact-form textarea:focus {
  border-color: rgb(63, 43, 179);
  ;
}

.contact-form textarea {
  height: 250px;
  resize: none;
}

.contact-form .theme-btn {
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  text-transform: capitalize;
  padding: 16px 39px;
  border: 2px solid rgb(63, 43, 179);
  font-family: Arimo, sans-serif;
  background: rgb(63, 43, 179);
  display: inline-block;
  position: relative;
  line-height: 24px;
  cursor: pointer;
  color: #fff;
  transition: 0.5s ease;
}

.contact-form .theme-btn:hover {
  color: rgb(63, 43, 179);
  border-color: rgb(63, 43, 179);
  background: 0 0;
}

.contact-form input.error,
.contact-form select.error,
.contact-form textarea.error {
  border-color: red !important;
}

.contact-form label.error {
  display: block;
  line-height: 24px;
  padding: 5px 0 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 12px;
  color: red;
  font-weight: 500;
}

.social-icon-four {
  position: relative;
}

.social-icon-four li {
  position: relative;
  margin-right: 18px;
  display: inline-block;
}

.social-icon-four li.follow {
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  display: block;
  margin-bottom: 20px;
}

.social-icon-four li a {
  position: relative;
  font-size: 20px;
  color: #fff;
  -webkit-transition: all .3s ease;
  -ms-transition: all .3s ease;
  -o-transition: all .3s ease;
  -moz-transition: all .3s ease;
  transition: all .3s ease;
}

i{
  color:white;
  transition:0.4s ease;

&:hover {
  color: #5c5c5c !important;
}
}

.iconHover i {
  transition: 0.5s ease;
  font-size: 1.3rem;
  color:white;
}


`

export default Contact