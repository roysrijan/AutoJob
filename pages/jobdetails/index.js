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

import stylesJobsDetails from "../../styles/Jobdetails.module.scss";
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

      <section className={stylesJobsDetails["jobsBanner"] + " " + ""}>
        <img src="/img/job-details-bg.jpg" alt="autojob" />
        <div className={stylesJobsDetails.innerpageBannerText}>
          <h1>Job Details</h1>
          <p>Cras ultricies ligula sed</p>
        </div>
      </section>
      <section
        className={
          stylesJobsDetails["jobDetailsContainer"] + " " + "blockPadding"
        }
      >
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesJobsDetails.jobDetailsBox}>
             
                <h2>Front End Developer</h2>
                <div className={stylesJobsDetails.companyName}>
                  <span>
                    <i class="fa fa-building" aria-hidden="true"></i>{" "}
                    <p>Google</p>
                  </span>
                  <span>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    <p>United Kingdom</p>
                  </span>
                </div>
                <div className={stylesJobsDetails.jobDetailsContent}>
                  <p>
                    At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus
                    Qui Blanditiis Praesentium Voluptatum Deleniti Atque
                    Corrupti Quos Dolores Et Quas Molestias Excepturi Sint
                    Occaecati Cupiditate Non Provident, Similique Sunt In Culpa
                    Qui Officia Deserunt Mollitia Animi, Id Est Laborum Et
                    Dolorum Fuga. <br></br>
                    <br></br> Et Harum Quidem Rerum Facilis Est Et Expedita
                    Distinctio. Nam Libero Tempore, Cum Soluta Nobis Est
                    Eligendi Optio Cumque Nihil Impedit Quo Minus Id Quod Maxime
                    Placeat Facere Possimus.
                  </p>

                  <b>Skills</b>
                  <div className={stylesJobsDetails.skills}>
                    <span>Css3</span>
                    <span>Html5</span>
                    <span>Photoshop</span>
                    <span>Wordpress</span>
                    <span>PHP</span>
                    <span>Java Script</span>
                  </div>

                   <b>Requirements</b>
                   <div className={stylesJobsDetails.requirements}>
                    <span><h3>Availability</h3> <p>Hourly</p></span>
                    <span><h3>Education</h3> <p>Graduate</p></span>
                    <span><h3>Age</h3> <p>25+</p></span>
                    <span><h3>Experience</h3> <p> Intermidiate (3 - 5Year)</p></span>
                    <span><h3>Language</h3> <p>English, Hindi</p></span>
                  </div>

                  <b>Contact information</b>
                   <div className={stylesJobsDetails.contactInfo}>
                    <span><i class="fa fa-phone" aria-hidden="true"></i> <p>+91 215 245 6584</p></span>
                    <span><i class="fa fa-envelope" aria-hidden="true"></i> <p>autojob@gmail.com</p></span>
                    <span><i class="fa fa-skype" aria-hidden="true"></i><p>AutojobAdmin</p></span>
                  
                  </div>

                  <a href="!#" className={stylesJobsDetails.applyJobBt}>
                   Apply for this job
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
