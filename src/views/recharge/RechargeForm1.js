import React,{useState} from 'react';
import {Form,Col,Button} from 'react-bootstrap';
    

export const RechargeForm1 =({val})=>{
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
       const form = event.currentTarget;
       if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
       }
   
       setValidated(true);
     };
   
    return (
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
         <Form.Row>
           <Form.Group as={Col} md="6" controlId="memeId">
             <Form.Label>MeMe Id</Form.Label>
             <Form.Control type="text" placeholder="MemeId" required />
             <Form.Control.Feedback type="invalid">
               Please provide a valid meme Id.
             </Form.Control.Feedback>
             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
           </Form.Group>
           </Form.Row>
           <Form.Row>
           <Form.Group as={Col} md="3" controlId="emailId">
             <Form.Label>Email</Form.Label>
             <Form.Control type="email" placeholder="Email" required />
             <Form.Control.Feedback type="invalid">
               Please provide a valid email abc@xyz.com.
             </Form.Control.Feedback>
             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
         </Form.Row>
         <Button type="submit">Pay ${val.amount} </Button>
       </Form>
     );
   }
   