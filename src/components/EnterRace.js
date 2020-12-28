import{Row,Col} from 'react-bootstrap';
import EnterRaceForm from './EnterRaceForm';

function EnterRace() {
  return (  
    <div className="pt-3 ">
        <Row className="justify-content-md-center">            
            <Col></Col>
            <Col>
                <h3 className="text-primary">Jelentkezz a versenyre:  </h3>
            </Col>
            <Col></Col> 
        </Row>
   
    <EnterRaceForm/>
    
  </div>  
  );
}

export default EnterRace;