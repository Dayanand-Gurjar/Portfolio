import React, { useContext } from "react";
import "./Portfolio.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";

import 'swiper/css';
import onlinevoting from "../../img/onlinevoting.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Portfolio</span>
      <span>Dig Into My Universe</span>

      {/* slider */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}

        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="container" style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={onlinevoting} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Online Voting System</h1> 
            <p style={{color:darkMode?"#9A939E":""}}>It is web-based voting system that helps to manage the
elections easily and securely for institutional elections in
colleges.<br/>
Implemented using Reactjs as framework and MongoDb as
Database. </p> 
<div className="linkbutton"><a  href="#">Link</a></div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="container"  style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={Ecommerce} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Life Expectancy Predictor</h1> 
            <p style={{color:darkMode?"#9A939E":""}}>Developed a machine learning project based on Regression
Technique in Python programming language.<br/>
It predicts the life expectancy of an individual based on
features such as education, alcohol cons</p> 
<div className="linkbutton"><a  href="#">Link</a></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container"  style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={MusicApp} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Chatting App</h1> 
            <p style={{color:darkMode?"#9A939E":""}}>It is web-based voting system that helps to manage the
elections easily and securely for institutional elections in
colleges.<br/>
Implemented using Reactjs as framework and MongoDb as
Database. </p> 
<div className="linkbutton"><a  href="https://chatboss.onrender.com" target="_blank">Link</a></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container"  style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={HOC} alt="" />
            <div className="innercontainer">
            <h1 >Document Scanner</h1> 
            <p style={{color:darkMode?"#9A939E":""}}>Designed an OpenCV based Python project which scans any
document image and gives the cropped Document by
removing irrelevant portion.
</p> 
<div className="linkbutton"><a  href="#">Link</a></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
