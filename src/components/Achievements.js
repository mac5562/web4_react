import  {Card} from "react-bootstrap";

function Achievements() {
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
      Résztvevők száma: 55  
      </Card.Text>
      <Card.Text>
      <b>Helyezés: 3. hely</b>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>  
  );
}

export default Achievements;