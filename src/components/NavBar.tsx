import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Book</Nav.Link>
            <Nav.Link href="#features">Staff</Nav.Link>
            <Nav.Link href="#pricing">Member</Nav.Link>
            <Nav.Link href="#pricing">Lending</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
