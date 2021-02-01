//components
import {Navbar,Nav} from 'react-bootstrap';

export const Navigator = () => {
    return(
  //       <div>
  //               <nav>
  //                   <div class="nav-wrapper">
  //     <a href="/" class="brand-logo">MEME CHAT</a>
  //     <ul id="nav-mobile" class="right hide-on-med-and-down">
  //       <li><a href="/about">Features</a></li>
  //       <li><a href="/download">Download</a></li>
  //       <li><a href="/recharge">Recharge</a></li>
  //       <li><a href="/security">Security</a></li>
  //     </ul>
  //   </div>
  // </nav>

  //       </div>

<Navbar  bg="light" expand="lg">
  <Navbar.Brand href="/">
      <img
        alt=""
        src="/img/App_icon.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      MeMe Chat
  </Navbar.Brand>
  <Nav  className="ml-auto">
    <Nav.Link href="/about">Features</Nav.Link>
    <Nav.Link href="/download">Download</Nav.Link>
    <Nav.Link href="/recharge">Recharge</Nav.Link>
  </Nav>
</Navbar>

    )
};



