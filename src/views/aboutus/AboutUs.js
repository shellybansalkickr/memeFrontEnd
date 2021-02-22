import React, { Component } from 'react';
import Download from '../img/download.jpg';


//css
import "../aboutus/AboutUs.css";

//component
import { Texting } from "./Texting";
import { VideoCalling } from "./VideoCalling"


class AboutUs extends Component {
  render() {
    return (
      <div className="FlexWrapper flex-container" style={{
        backgroundImage: { Download },
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }} >

        <Texting></Texting>
        <VideoCalling></VideoCalling>
      </div>
    )
  }
}
export default AboutUs;