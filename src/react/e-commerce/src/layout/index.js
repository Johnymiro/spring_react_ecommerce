import { Link } from 'react-router-dom';
import {
    Navbar,
    Container,
    Nav
} from "react-bootstrap"

export default ({children}) => {
    return (
        <>

<Container fluid>
    <div style={{height: "10vh"}}>

        <Navbar bg="light" variant="light">
    <Container className="justify-content-center">
{/*     <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav>

      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">Sign-Up</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
    <div style={{height: "90vh", display: "flex", justifyContent: "center"}}>

    {children}
    </div>
</Container>
  </>

    )

}