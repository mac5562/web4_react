import{Row,Col} from 'react-bootstrap';
import PreviousRaceCard from './PreviousRaceCard';

function PreviousRaces() {
  return (  
    <div className="p-3 pl-5 container">
    <h5 className="text-primary">Korábbi versenyek és eredmények:  </h5>
    <Row className="align-items-center">
        <Col>
            <PreviousRaceCard/>
        </Col>
        <Col>
            <PreviousRaceCard/>
        </Col>
        <Col>
            <PreviousRaceCard/>
        </Col>
        <Col>
            <PreviousRaceCard/>
        </Col>  <Col>
            <PreviousRaceCard/>
        </Col>
        <Col>
            <PreviousRaceCard/>
        </Col>
    </Row> 
  </div>  
  );
}

export default PreviousRaces;