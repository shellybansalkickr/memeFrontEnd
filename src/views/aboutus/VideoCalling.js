export const VideoCalling =()=>{
    return(
        <div className='sub-flex-container'>
            <p>
            <b>Video calls</b><br/>
                Speak Freely
                With voice calls, you can talk to your friends and family for free*, even if they're in another country.<br/>
                And with free* video calls, you can have face-to-face conversations for when voice or text just isn't enough.<br/>
                MeMevideo calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges.
            </p>
            <img src={process.env.PUBLIC_URL + '/img/videocalling.png'}></img>
            <p>* Data charges may apply. Contact your provider for details.</p>
        </div>

    )
}