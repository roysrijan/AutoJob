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
import { useEffect, useState } from "react";

// import customVirtualTourImg from "../../public/images/custom-virtual-tour.jpg";
// import customVirtualTourImg2 from "../../public/images/img-10.png";
// import customVirtualTourImg3 from "../../public/images/img-11.png";

export default function index() {
  const [jobdetails, setJobdetails] = useState()
  useEffect(()=>{
    setJobdetails(JSON.parse(sessionStorage.getItem('job')));
  },[])
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
             
                <h2>{jobdetails?.jobTitle}</h2>
                <div className={stylesJobsDetails.companyName}>
                  <span>
                    <i class="fa fa-building" aria-hidden="true"></i>{" "}
                    <p>{jobdetails?.company}</p>
                  </span>
                  <span>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                    <p>{jobdetails?.location}</p>
                  </span>
                </div>
                <div className={stylesJobsDetails.jobDetailsContent}>
                  <p>
                    {jobdetails?.jobCreationStatus}
                  </p>

                  <b>Skills</b>
                  <div className={stylesJobsDetails.skills}>
                    {jobdetails?.domain.split(', ').map(ele=><span>{ele}</span>)}
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
                    <span><i class="fa fa-envelope" aria-hidden="true"></i> <p>{jobdetails?.emailIDRevealed}</p></span>
                    <span><i class="fa fa-skype" aria-hidden="true"></i><p>AutojobAdmin</p></span>
                  
                  </div>

                  <a href={jobdetails?.link} className={stylesJobsDetails.applyJobBt}>
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
