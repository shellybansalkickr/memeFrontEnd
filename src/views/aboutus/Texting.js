import texting from '../img/texting.png';

export const Texting = () => {
    return (
        <div className='sub-flex-container'>
            <p>
                <b>Texts</b><br />
            Simple, Reliable Messaging
            Message your friends and family for free*. <br />
            MeMe uses your phone's Internet connection to send messages
            so you can avoid SMS fees.
            </p>
            <img src={texting}></img>
            <p>* Data charges may apply. Contact your provider for details.</p>
        </div>

    )
}