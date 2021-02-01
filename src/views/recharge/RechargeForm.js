import {Form,Button,Col} from 'react-bootstrap';

export const RechargeForm =()=>{
    return(
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control type="email" required  />
                    <Form.Control controlId='memeId'  />
                    <Form.Text className="text-muted">
                            MeMe Id
                    </Form.Text>

                </Col>
            </Form.Row>
            
            <Form.Row>
                
                <Col>
                    <Form.Control type="email" required  />
                    <Form.Text className="text-muted">
                            Email: abc@xyz.com
                    </Form.Text>
                </Col>
            </Form.Row>
           
      </Form>
    )
}