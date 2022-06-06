import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const MyNavbar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{background: "#726567" }}>
            <Container fluid>
                <Navbar.Brand href="#home" style={{color: "#5B3547"}}>Cocktails Corner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <NavDropdown title="Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Ordinary</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cocktail</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default MyNavbar