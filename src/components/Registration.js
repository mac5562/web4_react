import {Form, Button, Row, Col} from 'react-bootstrap';
import RegistrationForm from './RegistrationForm';

function Registration () {
    return (
        <div className="pt-3 ">
        <Row className="justify-content-md-center">            
            <Col></Col>
            <Col>
                <h3 className="text-primary">Regisztráció:  </h3>
            </Col>
            <Col></Col> 
        </Row>
   
    <RegistrationForm/>
    
  </div>
    );
}

export default Registration; 