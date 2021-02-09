import React, { Component } from 'react';


//css
import "./Download.css";


class Download extends Component {
  render(){
      return (
        // <div className="FlexWrapper" style={{ backgroundImage: "url(/img/hand-with-app.png)",
        //   backgroundPosition: 'center',
        //   backgroundSize:'cover'
        // }} >
        <div className='FlexWrapper' style={{padding:'20px',backgroundColor:'white'}}>
        
          <p style={{color:'white',textAlign:'center',alignItems:'center'}}>
            <a href='https://play.google.com/store/apps/details?id=com.videochat.memechat' target="_blank">
              <img src={process.env.PUBLIC_URL + '/img/Appstore.png'} style={{height:'52%',width:'24%'}}></img>
            </a>
            <br/> <br/>
            {/* <a href='https://play.google.com/store/apps/details?id=com.videochat.memechat' target="_blank">
              <img src={process.env.PUBLIC_URL + '/img/android.jpeg'} style={{width:'30%'}}></img>
              <p style={{color:'white'}}>* Data charges may apply. Contact your provider for details.</p>
            </a> */}
            </p>
        </div>
      )
  }
}
export default Download;