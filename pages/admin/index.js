import Head from "next/head";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Accordion,
  Card,
  Form,
} from "react-bootstrap";

import stylesAdminLogin from "../../styles/AdminLogin.module.scss";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/footer";
import Link from "next/link";

// import customVirtualTourImg from "../../public/images/custom-virtual-tour.jpg";
// import customVirtualTourImg2 from "../../public/images/img-10.png";
// import customVirtualTourImg3 from "../../public/images/img-11.png";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />

      <section className={stylesAdminLogin["jobsBanner"] + " " + ""}>
        <img src="/img/admin-bg.jpg" alt="autojob" />
        <div className={stylesAdminLogin.innerpageBannerText}>
          <h1>Admin Login</h1>
          <p>Cras ultricies ligula sed</p>
        </div>
      </section>

      <section className={stylesAdminLogin["loginWrap"] + " " + "blockPadding"}>
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesAdminLogin.loginBox}>
                <h2>Login</h2>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <div className={stylesAdminLogin.loginInputBox}><i class="fa fa-user" aria-hidden="true"></i> <Form.Control type="email" placeholder="Enter email" /></div>
                   
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <div className={stylesAdminLogin.loginInputBox}><i class="fa fa-lock" aria-hidden="true"></i>  <Form.Control type="password" placeholder="Password" /></div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="submit-bt">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
