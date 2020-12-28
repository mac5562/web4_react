import{Form, Button, Row, Col} from 'react-bootstrap';

function EnterRaceForm() {
  return (  
    <div className="p-3 pl-5 container ">
      <Row>
        <Col></Col>
        <Col xs={6}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-primary h6">Email cím</Form.Label>
            <Form.Control type="email" placeholder="pelda@mail.com" />
            <Form.Text className="text-muted">
              Az email címed sosem fogjuk megosztani mással.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-primary h6">Vezetéknév</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-primary h6">Keresztnév</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text-primary h6">Életkor</Form.Label>
            <Form.Control type="number"/>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Label className="text-primary h6">Nem</Form.Label>
            <Row>
              <Col><Form.Check type="checkbox" label="Nő" /></Col>
              <Col><Form.Check type="checkbox" label="Férfi" /></Col> 
              <Col></Col>
              <Col></Col>
            </Row>           
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Jelentkezek!
          </Button>
        </Form>
      </Col>
        <Col></Col>
      </Row>

  </div>  
  );
}

export default EnterRaceForm;