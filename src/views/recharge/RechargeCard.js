import React, { useState} from 'react';
import {Card,Button,Modal} from 'react-bootstrap';
import { RechargeForm1 } from './RechargeForm1';

 export const RechargeCard =({val})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return(
            <>
            <Card style={{ width: '18rem',backgroundColor:'pink',flexGrow: '1',margin:'30px',padding:'50px'
            }}>
            <Card.Img variant="top"  src="/img/coins.png"  />
            <Card.Body>
                <Card.Title>{val.coins} Coins</Card.Title>
                <Card.Text>
                    <b>{val.amount}$</b>
                </Card.Text>
                <Button variant="primary" onClick={handleShow} ><b> Pay {val.amount}$</b></Button>
            </Card.Body>
        </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy {val.coins} coins</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <RechargeForm1 val={val}></RechargeForm1>
        </Modal.Body>
      </Modal>
    </>
        )
}
