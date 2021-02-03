import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';



export class RechargeForm1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      validated: false,
      coins: this.props.coins,
      memeId: "",
      lastName: "",
      firstName: "",
      amount: "",
      phone: "",
      emailId: ""
    }
  }

  redirectToPayU = (pd) => {
    //use window.bolt.launch if you face an error in bolt.launch
    window.bolt.launch(pd, {
      responseHandler: function (response) {
        // your payment response Code goes here
        fetch('/payment/payumoney/response', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(response.response)
        })
          .then(function (a) {
            return a.json();
          })
          .then(function (json) {
            console.log(json);
          });
      },
      catchException: function (response) {
        // the code you use to handle the integration errors goes here
        // Make any UI changes to convey the error to the user
      }
    });
  }

  setValidated = (val) => {
    this.setState({ validated: val });
  }


  handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    var bodyFormData = new FormData();
    var payUParam;
    bodyFormData.append('memeId', this.state.memeId);
    bodyFormData.append('lastName', this.state.lastName);
    bodyFormData.append('firstName', this.state.firstName);
    bodyFormData.append('amount', this.props.val.amount);
    bodyFormData.append('number', this.state.phone);
    bodyFormData.append('emailId', this.state.emailId);
    bodyFormData.append('coins', this.props.val.coins);

    axios({
      method: 'post',
      url: '/api/rechargeApi',
      data: bodyFormData
    })
      .then(response => {
        console.log(response);
        payUParam = {
          key: response.data.key,
          txnid: response.data.txnid,
          amount: response.data.amount,
          firstname: response.data.firstname,
          email: response.data.email,
          phone: response.data.phone,
          productinfo: response.data.productinfo,
          surl: response.data.surl,
          furl: response.data.furl,
          hash: response.data.hash
        }
        this.redirectToPayU(payUParam);
      })
      .then((error) => {
        console.log(error);
      });

    this.setValidated(true);
  }


  handleEmailChange = (e) => {
    this.setState({ emailId: e.target.value });
  }
  handleNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  }
  handleLnameChange = (e) => {
    this.setState({ lastName: e.target.value });
  }
  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
  }

  handleIdChange = (e) => {
    this.setState({ memeId: e.target.value });
  }




  render() {
    console.log(this.props);
    return (
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="memeId" >
            <Form.Label>MeMe Id</Form.Label>
            <Form.Control type="text" placeholder="MemeId" value={this.state.memeId} onChange={this.handleIdChange} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid meme Id.
             </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="emailId">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={this.state.emailId} onChange={this.handleEmailChange} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email abc@xyz.com.
             </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={this.state.firstName} onChange={this.handleNameChange} required />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
             </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="lastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Name" value={this.state.lastName} onChange={this.handleLnameChange} />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="phone">
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" placeholder="xxxxxxxx" required minLength='8' value={this.state.phone} onChange={this.handlePhoneChange} />
            <Form.Control.Feedback type="invalid">
              Please provide a mobile number.
             </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Pay $ {this.props.val.amount} </Button>
      </Form>
    );
  }
}


