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
} from "react-bootstrap";

import stylesJobreferral from "../../styles/Jobreferral.module.scss";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/footer";

// import customVirtualTourImg from "../../public/images/custom-virtual-tour.jpg";
// import customVirtualTourImg2 from "../../public/images/img-10.png";
// import customVirtualTourImg3 from "../../public/images/img-11.png";

export default function index() {
  return (
    <div className="globalWrap">
      <Header />

      <section className={stylesJobreferral["jobsBanner"] + " " + ""}>
        <img src="/img/referral-bg.jpg" alt="autojob" />
        <div className={stylesJobreferral.innerpageBannerText}>
          <h1>Refer a Job</h1>
          <p>Cras ultricies ligula sed</p>
        </div>
      </section>

      <section
        className={stylesJobreferral["referralFormWrap"] + " " + "blockPadding"}
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesJobreferral.formWrap}>
                <Row>
                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Company name</label>
                      <input type="text" id="fname" name="fname" placeholder="Put company name" />
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Job title</label>
                      <input type="text" id="fname" name="fname" placeholder="Job title" />
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Location</label>
                      <input type="text" id="fname" name="fname" placeholder="Location"  />
                    </div>
                  </Col>

                  <Col lg="3">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Exp. required</label>
                      <input type="text" id="fname" name="fname" placeholder="Total exp."  />
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Referral Up Time</label>
                      <input type="text" id="fname" name="fname" placeholder="Referral Up Time"  />
                    </div>
                  </Col>

                  <Col lg="12">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Skills</label>
                      <input type="text" id="fname" name="fname" placeholder="Job tags"  />
                      {/* <div className={stylesJobreferral.skillsTags}>
                        <span>Javascript</span>
                        <span>Angular</span>
                        <span>React</span>
                        <span>React native</span>
                      </div> */}
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Email</label>
                      <input type="text" id="fname" name="fname" placeholder="Email ID"  />
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Job Link ( If available )</label>
                      <input type="text" id="fname" name="fname" placeholder="Link of the job"  />
                    </div>
                  </Col>

                  <Col lg="12">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Description</label>
                     <textarea rows="5" placeholder="Description"></textarea>
                    </div>
                  </Col>

                  <Col lg="12">
<div className={stylesJobreferral.submitBtWrap}> <a href="!#" className={stylesJobreferral.submitBt}>
                  Submit
                  </a></div>

                 
                  </Col>

               
                 

                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
