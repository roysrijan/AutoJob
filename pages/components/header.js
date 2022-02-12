import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
//import logo from "../../public/images/logo.png";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <>
      <Head>
        <title>Autojob</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
          <h2>AUTOJOB</h2>
            {/* <img src="/img/logo.png" alt="Spaceshift" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navBarTop">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
             
              <Nav.Link href="#home">About Us</Nav.Link>
              <Nav.Link href="/quesPost">Posts</Nav.Link>
              <Nav.Link href="/jobs">Jobs</Nav.Link>
              <Nav.Link href="/referralJob">Refer a Job</Nav.Link>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
