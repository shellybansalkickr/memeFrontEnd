import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';

import Loader from 'react-loader-spinner';
import { TransactionTable } from './TransactionTable';



class Transactions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            validated: false,
            userId: "",
            password: "",
            currentUser: null,
            isLoading: false
        }
    }




    setValidated = (val) => {
        this.setState({ validated: val });
    }


    handleSubmit = (event) => {
        const form = event.currentTarget;
        debugger;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {

            event.preventDefault();

            this.validateUser();
        }
        this.setValidated(true);
    }

    validateUser = () => {
        this.setState({ isLoading: true });
        axios.get('/api/verifyuser/manager', {
            params: {
                password: this.state.password,
                userId: this.state.userId
            }
        }
        ).then((response) => {
            if (response.status == '200') {
                this.setState({ isLoading: false });
                this.setState({ currentUser: response.data });
            }
        })

    };


    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    handleIdChange = (e) => {
        this.setState({ userId: e.target.value });
    }

    render() {

        return (
            <div style={{ margin: '50px', padding: '30px' }} >

                {this.state.currentUser === null ?
                    <p style={{ backgroundColor: 'white', padding: '30px' }}>
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Col></Col>
                                <Form.Group as={Col} md="6" controlId="userId" >
                                    <Form.Label>Manager Id</Form.Label>
                                    <Form.Control type="text" placeholder="abc@xyz.com" value={this.state.userId} onChange={this.handleIdChange} required />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a registered manager Id.
             </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Col></Col>
                            </Form.Row>
                            <Form.Row>
                                <Col></Col>
                                <Form.Group as={Col} md="6" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="*****" required value={this.state.password} onChange={this.handlePasswordChange} />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a password.
             </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Col></Col>
                            </Form.Row>
                            <Form.Row>
                                <Col></Col>
                                <Col sm='9'>
                                    {this.state.isLoading === true ? <Loader type="ThreeDots" color="blue" height="80px" width="60px" /> :
                                        <Button type="submit" >Log In
                                </Button>}
                                </Col>

                            </Form.Row>
                        </Form>
                    </p>
                    :
                    <TransactionTable />}

            </div>

        );
    }
}

export default Transactions;


