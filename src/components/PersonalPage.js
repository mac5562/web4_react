import Achievements from './Achievements';
import PersonalDetails from './PersonalDetails';
import{Row,Col} from 'react-bootstrap';

function PersonalPage() {
  return (  
    <div className="p-3 pl-5 container">
    <PersonalDetails/> 
    <h5 className="text-primary">Eredmények:  </h5>
    <Row className="align-items-center">
        <Col>
           <Achievements/>
        </Col>
        <Col>
        <Achievements/>
        </Col>
        <Col>
           <Achievements/>
        </Col>
        <Col>
        <Achievements/>
        </Col>
        <Col>
           <Achievements/>
        </Col>
        <Col>
        <Achievements/>
        </Col>
    </Row> 
  </div>  
  );
}

export default PersonalPage;