import  {Card} from "react-bootstrap";

function PreviousRaceCard() {
  return (  
    <div className="p-1 pb-2">
    <Card className="border border-primary" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Verseny neve</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Dátum: 2020.10.11.</Card.Subtitle>
      <Card.Text>
       Helyszín: xyz - park           
      </Card.Text>
      <Card.Text>
     <h6 className="text-primary"> Első helyezet: xy</h6>
     <h6 className="text-primary"> Második helyezet: xy</h6>
     <h6 className="text-primary"> Harmadik helyezet: xy</h6>
      </Card.Text>        
    </Card.Body>
  </Card>
  </div>  
  );
}

export default PreviousRaceCard;