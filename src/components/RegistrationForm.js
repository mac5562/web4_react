import {Form, Button, Row, Col} from 'react-bootstrap';

function RegistrationForm () {
    return (
        <div className="p-3 pl-5 container ">
            <Row>
                <Col>
                <Form>
                    <h5>Bejelentkezéshez szükséges adatok</h5>
                    <Form.Group controlId="formRegistrationEmail">
                        <Form.Label className="text-primary h6">Email cím</Form.Label>
                        <Form.Control type="email" placeholder="pelda@mail.com" />
                    </Form.Group>
                    <Form.Group controlId="fromRegistrationPassword">
                        <Form.Label>Jelszó</Form.Label>
                        <Form.Control type="password" placeholder="jelszavam"/>
                    </Form.Group>
                    <Form.Group controlId="fromRegistrationPasswordRepeat">
                        <Form.Label>Jelszó mégegyszer</Form.Label>
                        <Form.Control type="password" placeholder="jelszavam mégegyszer"/>
                    </Form.Group>
                    {/* <Form.Group controlId="formRegistrationCheckbox">
                        <Form.Check type="checkbox" label="Elfogadom a felhasználási feltételeket." />
                    </Form.Group> */}
                    <Button variant="primary" type="submit" block>
                        Regisztrálok
                    </Button>
                </Form>
                </Col>
                <Col>
                <Form>
                    <h5>Személyes adatok</h5>
                    <Form.Group controlId="formRegistrationLastName">
                        <Form.Label className="text-primary h6">Vezetéknév</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group controlId="formRegistrationFirstName">
                        <Form.Label className="text-primary h6">Keresztnév</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group controlId="formRegistrationAge">
                        <Form.Label className="text-primary h6">Születési idő</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>

                    <Form.Group controlId="formRegistratonGender">
                        <Form.Label className="text-primary h6">Nem</Form.Label>
                        <Row>
                        <Col>
                            <Form.Check inline type="radio" label="Nő" name="radioButtonWoman" />
                            <Form.Check inline type="radio" label="Férfi" name="radioButtonMan"  />
                        </Col>   
                        </Row>           
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </div>
    );
}

export default RegistrationForm;