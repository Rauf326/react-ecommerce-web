import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const HeroSection = ({ myData }) => {
    const { sheading, sname, simage } = myData;
    return (
        <>
            <HeroWrapper>
                <div className="container mt-5">
                    <div className="row container ">
                        <div className="col-lg-6 col-md-12 col-sm-12 sol-12 mt-3 align-self-center">
                            <h5>{sheading}</h5>
                            <h1>{sname}</h1>
                            <p>
                                Lorem ipsum dolor sit lorem
                                amet consectetur adipisicing elit.
                                Maxime, illo vero magnam repudiandae voluptate reiciendis
                                velit perferendis officiis deserunt ipsum suscipit architecto
                                eum excepturi dicta tenetur? Rerum id qui harum?Rerum id qui harum?
                            </p>
                            <NavLink to="/products">
                                <button className='btn btn-primary mt-2'>Shop Now</button>
                            </NavLink>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 sol-12 mt-5 img-fluid ">
                            <img src={simage} alt="hero" width="650" className='img-fluid  d-block d-sm-block d-lg-none d-md-none' />
                            <div className="about-img d-sm-none d-lg-block d-md-block d-none">
                                <img src={simage} alt="hero" width="450" className='img-fluid shadow d-block d-sm-block' />

                            </div>

                        </div>
                    </div>
                </div>
            </HeroWrapper>
        </>
    )
}
const HeroWrapper = styled.section`
h1{
    color: rgb(63, 43, 179);
    font-size: 2.8rem;
    font-weight: bold;
}
h5{
    color: rgb(78, 78, 78);
}
p{
    color: rgb(78, 78, 78);
}
.about-img{
    position: relative;

    &:before{
    position: absolute;
    content: "";
    right: 90px;
    top: -31px;
    border: 10px solid rgb(63, 43, 179, 0.6);
    width: 80%;
    height: 100%;
}
}


`

export default HeroSection