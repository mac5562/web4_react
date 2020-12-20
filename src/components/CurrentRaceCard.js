import  {Card, Button} from "react-bootstrap";

function CurrentRaceCard() {
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
     Táv: 8km
      </Card.Text>
      <Card.Text>
      Ajánlott korosztály: 18  
      </Card.Text>
      <Card.Text>
      Ajanlott nem: nő  
      </Card.Text>
      <Card.Text>
            <Button>Jelentkezés</Button>
      </Card.Text>
    </Card.Body>
  </Card>
  </div>  
  );
}

export default CurrentRaceCard;