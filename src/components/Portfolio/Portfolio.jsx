import React, { useContext } from "react";
import "./Portfolio.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";

import 'swiper/css';
import Startours from "../../img/StarTours.png";
import todo from "../../img/todo.png";
import taskmanager from "../../img/TaskManager.png";
import nmart from "../../img/nmart.png";
import onlinevoting from "../../img/onlinevoting.png";
import lifeexpectancy from "../../img/lifeexpectancy.jpeg";
import HOC from "../../img/hoc.png";
import mernchat from "../../img/mernchat.png";
import { themeContext } from "../../Context";
import { LayoutGroup } from "framer-motion";
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
        grabCursor={true}
        slidesPerView={"auto"}
        pagination={{clickable: true}}
        modules={[ Pagination]}
         className="portfolio-slider"
      >  
      <SwiperSlide>
          <div className="container" style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={Startours} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Star Tours</h1> 
            <p style={{color:darkMode?"black":""}}>Created a tour booking site using Express, Node.js, and MongoDB, enabling
users to discover and book tours. Leveraged Express and Node.js to build a
robust backend, handling API requests, user authentication, and data
management..<br/>
</p> 
<div className="linkbutton"><a target="_blank" href="https://startours.onrender.com">Link</a></div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="container" style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={nmart} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>N-mart</h1> 
            <p style={{color:darkMode?"black":""}}>It is a MERN stack-based ecommerce project, implementing key
functionalities such as product listing, shopping cart management, and secure
payment processing. <br/>
Leveraged React.js to create a responsive and user-friendly front-end, while
Express.js and Node.js handled backend API integrations and data management.
</p> 
<div className="linkbutton"><a target="_blank" href="#">Link</a></div>
            </div>
          </div>
        </SwiperSlide>

      <SwiperSlide>
          <div className="container" style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={taskmanager} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Task Manager(Full Stack) </h1> 
            <p style={{color:darkMode?"black":""}}>It is web-based Task-Manager system 
  that helps you efficiently organize, track, and manage your tasks.
  With its intuitive user interface and robust features, you can create, assign and update 
  tasks seamlessly.<br/>
  Implemented using Reactjs,ExpressJs and MongoDb.</p>
<div className="linkbutton"><a  target="_blank"href="https://task-manager-h7i3.onrender.com">Link</a></div>
            </div>
          </div>
          
        </SwiperSlide>

        <SwiperSlide>
          <div className="container" style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={todo} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>TODO Application</h1> 
            <p style={{color:darkMode?"black":""}}>It is Multi-user TODO app that uses Google
  and Email-Password based Authentication provided by firebase to signin users. It leverages Firestore and Cloud Storage facilities 
  of Firebase to make a very efficient database storage. It helps to manage our Todos very 
            efficiently.
 </p> 
<div className="linkbutton"><a  target="_blank"href="https://web-app-39a27.web.app/">Link</a></div>
            </div>
          </div>
          
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="container" style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={onlinevoting} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Online Voting System</h1> 
            <p style={{color:darkMode?"black":""}}>It is web-based voting system that helps to manage the
elections easily and securely for institutional elections in
colleges.<br/>
Implemented using Reactjs as framework and MongoDb as
Database. </p> 
<div className="linkbutton"><a  target="_blank" href="https://nmart.onrender.com">Link</a></div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="container"  style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={mernchat} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Chatting App</h1> 
            <p style={{color:darkMode?"black":""}}>It is web-based voting system that helps to manage the
elections easily and securely for institutional elections in
colleges.<br/>
Implemented using Reactjs as framework and MongoDb as
Database. </p> 
<div className="linkbutton"><a target="_blank" href="https://chatboss.onrender.com">Link</a></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="container"  style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={lifeexpectancy} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Life Expectancy Predictor</h1> 
            <p style={{color:darkMode?"black":""}}>Developed a machine learning project based on Regression
Technique in Python programming language.<br/>
It predicts the life expectancy of an individual based on
features such as education, alcohol cons</p> 
<div className="linkbutton"><a target="_blank" href="#">Link</a></div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="container"  style={{backgroundColor:darkMode?"#FCA61F":""}}>
            <img src={HOC} alt="" />
            <div className="innercontainer">
            <h1 style={{color:darkMode?"white":""}}>Document Scanner</h1> 
            <p style={{color:darkMode?"black":""}}>Designed an OpenCV based Python project which scans any
document image and gives the cropped Document by
removing irrelevant portion.
</p> 
<div className="linkbutton"><a target="_blank" href="#">Link</a></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
