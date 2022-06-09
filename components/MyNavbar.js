import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const MyNavbar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{background: "#726567" }}>
            <Container fluid>
                <Navbar.Brand href="/" style={{color: "#5B3547"}}>Cocktails Corner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Category" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={"/category/Ordinary Drink"}>Ordinary</NavDropdown.Item>
                            <NavDropdown.Item href={"/category/Cocktail"}>Cocktail</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Alcoholic" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={"/alcoholic/Alcoholic"}>Alcoholic</NavDropdown.Item>
                            <NavDropdown.Item href={"/alcoholic/Non Alcoholic"}>Non Alcoholic</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default MyNavbar