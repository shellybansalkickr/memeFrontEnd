import React, { useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import { RechargeForm1 } from './RechargeForm1';
import coins from '../img/coins.png';

export class AddAmountCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            val: {
                amount: 0,
                coins: 0,
                calledFrom: 'new',
                currency:this.props.val.currency
            }

        }

    }
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }

    handleAmountChange = (e) => {
        var val = { ...this.state.val }
        val.amount = e.target.value ;
        this.setState({ val })
        
    }
    render() {
        return (
            <>
                <Card style={{
                    width: '18rem', backgroundColor: 'pink', flexGrow: '1', margin: '30px', padding: '50px'
                }}>
                    <Card.Img variant="top" src={coins} />
                    <Card.Body>
                        <Card.Title>Add Amount</Card.Title>
                        <Card.Text>
                            <Form.Control type="text" placeholder="Enter Amount" value={this.state.val.amount} onChange={this.handleAmountChange} required />
                        </Card.Text>
                        <Button variant="primary" onClick={this.handleShow} disabled={!this.state.val.amount} ><b> Add {this.state.val.amount} {this.props.val.selectedCountry.currency}</b></Button>
                    </Card.Body>
                </Card>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Recharge with  {this.state.val.amount} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RechargeForm1 val={this.state.val} onClose={this.handleClose.bind(this)}></RechargeForm1>
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}
