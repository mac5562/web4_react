import  {Card} from "react-bootstrap";

function PersonalDetails() {
  return (  
    <div className="p-1 pb-3 container">
    <Card classname= "border" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Szeményes adatok</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Regisztrált: 2020.10.11.</Card.Subtitle>
      <Card.Text>
       Név: Példa Pál
      </Card.Text>
      <Card.Text>
       Születési év: 1998.02.20.
      </Card.Text>
      <Card.Text>
       Nem: Férfi
      </Card.Text>
      <Card.Link href="#"> Közelgő versenyek</Card.Link>
    </Card.Body>
  </Card>
  </div>  
  );
}

export default PersonalDetails;
