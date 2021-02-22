import React, { Component } from 'react';
import Appstore from '../img/Appstore.png';


//css
import "./Download.css";


class Download extends Component {
  render() {
    return (

      <div className='FlexWrapper' style={{ padding: '20px', backgroundColor: 'white' }}>

        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center' }}>
          <a href='https://play.google.com/store/apps/details?id=com.videochat.memechat' target="_blank">
            <img src={Appstore} style={{ height: '52%', width: '24%' }}></img>
          </a>
        </p>
      </div>
    )
  }
}
export default Download;