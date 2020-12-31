import {Form, Button, Row, Col} from 'react-bootstrap';
import LoginForm from './LoginForm';

function Login () {
    return (
        <div className="pt-3 ">
        <Row className="justify-content-md-center">            
            <Col></Col>
            <Col>
                <h3 className="text-primary">Belépés:  </h3>
            </Col>
            <Col></Col> 
        </Row>
   
    <LoginForm/>
    
  </div>
    );
}

export default Login; 