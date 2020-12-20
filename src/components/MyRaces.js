import{Row,Col} from 'react-bootstrap';
import Race from './Race';

function MyRaces() {
  return (  
    <div className="p-3 pl-5 container">
    <h5 className="text-primary">Közelgő versenyeim:  </h5>
    <Row className="align-items-center">
        <Col>
            <Race/>
        </Col>
        <Col>
            <Race/>
        </Col>
        <Col>
            <Race/>
        </Col>
        <Col>
            <Race/>
        </Col>  <Col>
            <Race/>
        </Col>
        <Col>
            <Race/>
        </Col>
    </Row> 
  </div>  
  );
}

export default MyRaces;