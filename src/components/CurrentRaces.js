import{Row,Col} from 'react-bootstrap';
import CurrentRaceCard from './CurrentRaceCard';

function CurrentRaces() {
  return (  
    <div className="p-3 pl-5 container">
    <h5 className="text-primary">Közelgő versenyek:  </h5>
    <Row className="align-items-center">
        <Col>
            <CurrentRaceCard/>
        </Col>
        <Col>
            <CurrentRaceCard/>
        </Col>
        <Col>
            <CurrentRaceCard/>
        </Col>
        <Col>
            <CurrentRaceCard/>
        </Col>  <Col>
            <CurrentRaceCard/>
        </Col>
        <Col>
            <CurrentRaceCard/>
        </Col>
    </Row> 
  </div>  
  );
}

export default CurrentRaces;