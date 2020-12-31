import {Form, Button, Row, Col} from 'react-bootstrap';

function LoginForm() {
    return (
        <div className="p-3 pl-5 container ">
            <Row>
                <Col xs="6">
                <Form>
                    <Form.Group controlId="formLoginEmail">
                        <Form.Label className="text-primary h6">Email cím</Form.Label>
                        <Form.Control type="email" placeholder="pelda@mail.com" />
                    </Form.Group>
                    <Form.Group controlId="fromLoginPassword">
                        <Form.Label>Jelszó</Form.Label>
                        <Form.Control type="password" placeholder="jelszavam"/>
                    </Form.Group>
                    <a href="">Elfelejtettem a jelszavam.</a>
                    <Button variant="primary" type="submit" block>
                        Belépek
                    </Button>
                    <Button variant="info" type="submit" block>
                        Új felhasználóként regisztrálok.
                    </Button>
                </Form>
                </Col>
            </Row>
        </div>
    );
}

export default LoginForm;