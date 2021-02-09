import React, { Component } from 'react';
import {Form,Col,Button} from 'react-bootstrap';

class ContactUs extends Component {
  constructor(props){
    super(props);
    this.state={
      validated : false
    }

  }
  render(){
    
      return (
    < div style={{ margin: '50px', padding: '30px' }}>
    <p style={{padding: '30px',backgroundColor:'white'}}>
      <h1>Contacts</h1>
      <h3>Email : memechats.service@gmail.com</h3>
      
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} >
        <Form.Row>
       
          <Form.Group as={Col} md="6" controlId="name" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a name.
             </Form.Control.Feedback>
            
          </Form.Group>
        </Form.Row>
        <Form.Row>
        
          <Form.Group as={Col} md="6" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="abc@xyz.com"required />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
             </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
        
          <Form.Group as={Col} md="6" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control type="textAre" placeholder="Type your message here..." required/>
            <Form.Control.Feedback type="invalid">
              Please provide your query.
             </Form.Control.Feedback>
            
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit</Button>
      </Form>
      </p>
    </div>
  )
}
}
export default ContactUs;