import React from 'react'
import styled from 'styled-components';
const Services = () => {
    return (
        <>
            <Wrapper>
                <div className="container mt-5">
                <h3 className='text-center'>Our Main Service</h3>
                    <div className="row mt-4">
                    
                        <div className="col-lg-4 text-center p-4  ">
                            <div className="serviceBox p-3 d-flex align-items-center justify-content-center shadow">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 service-icon ">
                                        <i className="fa fa-truck icon"></i></div>
                                    <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 mt-2">
                                        <h5>Super fast and Free delivery
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                      

                        <div className="col-lg-4 d-lg-none text-center p-4 ">
                            <div className="serviceBox p-3 d-flex align-items-center justify-content-center shadow">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 service-icon ">
                                        <i className="fa-solid fa-shield icon"></i>

                                    </div>
                                    <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 mt-2">
                                        <h5>Non-Contact Shipping
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 d-lg-none text-center p-4 ">
                            <div className="serviceBox p-3 d-flex align-items-center justify-content-center  shadow">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 service-icon  ">
                                        <i className="fa fa-money-check-dollar icon"></i>

                                    </div>
                                    <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 mt-2">
                                        <h5>Money Back Guaranteed</h5>


                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 d-sm-none d-md-none d-none d-lg-block p-4">
                            <div className="row ">
                                <div className="col-lg-12 col-md-12 d-flex align-items-center justify-content-center shadow p-3 middle-icon  ">
                                    <i className="fa-solid fa-shield icon"></i>
                                    <h6 className='ms-3'>Non-Contact Shipping</h6>
                                </div>

                                <div className="col-lg-12 col-md-12 d-flex align-items-center shadow justify-content-center my-2 p-3 middle-icon">
                                    <div className="middleBox">

                                    </div>
                                    <i className="fa fa-money-check-dollar icon"></i>
                                    <h6 className='ms-3'>Money Back Guaranteed</h6>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 text-center p-4 ">
                            <div className="serviceBox p-3 d-flex align-items-center justify-content-center shadow ">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 service-icon ">
                                        <i className="fa-sharp fa-solid fa-shield-halved icon"></i>

                                    </div>
                                    <div className="col-lg-12 col-sm-12 col-md-12 col-12 col-xl-12 mt-2">
                                        <h5>Super Secure Payment System
                                        </h5>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}
const Wrapper = styled.section`
h3{
    color: rgb(78, 78, 78);
  font-size: 1.6rem;
}
    .serviceBox{
        background-color: rgb(250, 250, 250);
        height: 12rem;
        width: auto;
        transition:0.4s ease;

        &:hover i{
        background-color:rgb(61 41 179);
        color:white;
    }
     &:hover{
        box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;
-webkit-box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;
-moz-box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;
     }   
        
    }
    .middle-icon{
        background-color: rgb(250, 250, 250);
        height:5.6rem;
        transition:0.4s ease;
    &:hover i{
        background-color:rgb(61 41 179);
        color:white;
    }

        &:hover{
            box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;
-webkit-box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;
-moz-box-shadow: 10px 10px 36px -5px rgba(0,0,0,0.75) !important;  
        }
    }
    .serviceBox h5{
        font-size: 1rem;
        color: rgb(54, 54, 54);
    }

    .icon{
    font-size:22px;
    padding:18px;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
    transition:0.6s ease !important;
    }
`
export default Services;