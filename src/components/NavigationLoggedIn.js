import  {Navbar,Nav} from "react-bootstrap";


function NavigationLoggedIn() {
  return (   
    <div>
    <Navbar  bg="primary" variant="dark" expand="lg">
    <Navbar.Brand href="#home">WB4 Futók</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="container mr-auto">
        <Nav.Link href="#home">Saját oldal</Nav.Link>
        <Nav.Link href="#link">Versenyek</Nav.Link> 
        <Nav.Link href="#link">Kijelentkezés</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div> 
  );
}

export default NavigationLoggedIn;