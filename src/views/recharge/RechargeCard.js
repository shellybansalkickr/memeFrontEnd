import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { RechargeForm1 } from './RechargeForm1';
import coins from '../img/coins.png';

export class RechargeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false

    }

  }
  

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }
  render() {
    return (
      <>
        <Card style={{
          width: '18rem', backgroundColor: 'pink', flexGrow: '1', margin: '30px', padding: '50px'
        }}>
          <Card.Img variant="top" src={coins} />
          <Card.Body>
            <Card.Title>{this.props.val.coins} Coins</Card.Title>
            <Card.Text>
              <b>{this.props.val.amount} {this.props.val.currency}</b>
            </Card.Text>
            <Button variant="primary" onClick={this.handleShow} ><b> Pay {this.props.val.amount} {this.props.val.currency}</b></Button>
          </Card.Body>
        </Card>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Buy {this.props.val.coins} coins</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RechargeForm1 val={this.props.val} onClose={this.handleClose.bind(this)}></RechargeForm1>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
