//import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Container fluid>
        <div style={{ height: "10vh" }}>
          <Navbar bg="light" variant="light">
            <Container className="justify-content-center">
              {/*     <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
              <Nav>
                {/*                 <span onClick={() => history.push("/login")}>Login</span>
                &nbsp; &nbsp;
                <span style={{}} onClick={() => history.push("/signup")}>
                  Sign-up
                </span>
                &nbsp; &nbsp;
                <span onClick={() => history.push("/profile")}>Profile</span> */}
                {!isAuthenticated && (
                  <>
                    <Link to="/login">Login</Link>
                    &nbsp; &nbsp;
                    <Link to="/signup">Sign-up</Link>
                    &nbsp; &nbsp;
                  </>
                )}
                {isAuthenticated && <Link to="/profile">Profile</Link>}
              </Nav>
            </Container>
          </Navbar>
        </div>
        <div
          style={{ height: "90vh", display: "flex", justifyContent: "center" }}
        >
          {children}
        </div>
      </Container>
    </>
  );
};
