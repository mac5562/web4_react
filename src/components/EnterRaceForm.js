import{Form, Button, Row, Col, FormCheck} from 'react-bootstrap';

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

          <Form.Group controlId="formBasicVNev">
            <Form.Label className="text-primary h6">Vezetéknév</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="formBasicKNev">
            <Form.Label className="text-primary h6">Keresztnév</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group controlId="formBasicKor">
            <Form.Label className="text-primary h6">Életkor</Form.Label>
            <Form.Control type="number" min="12" max="70" value="12" />
          </Form.Group>

          <Form.Group controlId="formBasicRadio">
            <Form.Label className="text-primary h6">Nem</Form.Label>
            <Row>
              <Col><Form.Check inline type="radio" label="Nő" name="radioButtonNem" />
              <Form.Check inline type="radio" label="Férfi" name="radioButtonNem"  />
              </Col>   
            </Row>           
          </Form.Group>
         {/*} <Form.Group controlId="formBasicCheckbox">
            <Row>
              <Col><Form.Check inline type="checkbox" label="Elfogadom a versenyszabályzatot" />
              </Col>   
            </Row>           
  </Form.Group>{*/}
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