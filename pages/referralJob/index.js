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
import { Formik } from 'formik';

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
              <Formik
                  initialValues={{ emailID: 'roy.srijan@gmail.com', password: 'sfdsfd' }}
                  validate={values => {
                    const errors = {};
                    if (!values.emailID) {
                      errors.emailID = 'Required';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailID)
                    ) {
                      errors.emailID = 'Invalid email address';
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      fetch('https://job-qna.herokuapp.com/v1/job', {
                        method: 'POST',
                        headers:{
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(values, null, 2)
                      }).then(res=>{
                        setSubmitting(false);
                      })
                      
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                <form onSubmit={handleSubmit}>
                <Row>
                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Company name</label>
                      <input type="text" id="fname" name="company" placeholder="Put company name" defaultValue={values.company} onChange={handleChange}/>
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Job title</label>
                      <input type="text" id="fname" name="jobTitle" placeholder="Job title" defaultValue={values.jobTitle} onChange={handleChange}/>
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Location</label>
                      <input type="text" id="fname" name="location" placeholder="Location" defaultValue={values.location} onChange={handleChange} />
                    </div>
                  </Col>

                  <Col lg="3">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Exp. required</label>
                      <input type="text" id="fname" name="noOfYearsExperience" placeholder="Total exp." defaultValue={values.noOfYearsExperience} onChange={handleChange} />
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Referral Up Time</label>
                      <input type="text" id="fname" name="ttl" placeholder="Referral Up Time" defaultValue={values.ttl} onChange={handleChange} />
                    </div>
                  </Col>

                  <Col lg="12">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Skills</label>
                      <input type="text" id="fname" name="domain" placeholder="Job tags" defaultValue={values.domain} onChange={handleChange} />
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
                      <input type="text" id="email" name="emailID" placeholder="Email ID" defaultValue={values.emailID} onChange={handleChange} />
                    </div>
                  </Col>

                  <Col lg="6">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Job Link ( If available )</label>
                      <input type="text" id="password" name="link" placeholder="Link of the job" defaultValue={values.link} onChange={handleChange} />
                    </div>
                  </Col>

                  <Col lg="12">
                    <div className={stylesJobreferral.inputBox}>
                      <label>Description</label>
                     <textarea rows="5" placeholder="Description" name="jobCreationStatus" defaultValue={values.jobCreationStatus} onChange={handleChange}></textarea>
                    </div>
                  </Col>

                  <Col lg="12">
<div className={stylesJobreferral.submitBtWrap}> <button type="submit" className={stylesJobreferral.submitBt} disabled={isSubmitting}>
                  Submit
                  </button></div>

                 
                  </Col>

               
                 

                </Row>
                </form>
                )}
              </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
