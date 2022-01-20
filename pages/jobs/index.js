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
} from "react-bootstrap";

import stylesJobs from "../../styles/Jobs.module.scss";
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

      <section className={stylesJobs["jobsBanner"] + " " + ""}>
        <img src="/img/job-banner.jpg" alt="autojob" />
        <div className={stylesJobs.innerpageBannerText}>
          <h1>Browse Job</h1>
          <p>Cras ultricies ligula sed</p>
        </div>
      </section>

      <section className={stylesJobs["jobSearchBar"] + " " + ""}>
       
        <div className={stylesJobs.searchBarWrap}>
        <Container>
          <Row>
            <Col lg="12">
              <div  className={
                    stylesJobs["sectionTitle"] +
                    " " +
                    stylesJobs["sectionTitleWhite"]
                  }>
                <h2> FInd all your Jobs </h2> <p> Praesent sapien massa </p>
              </div>
            </Col>
          </Row>
        </Container>
          <Container>
            <div className={stylesJobs.searchBarInnerBox}>
              <Row>
                <Col
                  lg="4"
                  sm="4"
                  className={
                    stylesJobs["borright"] + " " + stylesJobs["searchBarIcons"]
                  }
                >
                  <img src="/img/search-interface-symbol.png" alt="autojob" />
                  <div className={stylesJobs.jobsOptions}>
<h3>Experience</h3>
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</div>
                </Col>
                <Col
                  lg="3"
                  sm="3"
                  className={
                    stylesJobs["borright"] + " " + stylesJobs["searchBarIcons"]
                  }
                >
                  <img src="/img/location.png" alt="autojob" />
<div className={stylesJobs.jobsOptions}>
<h3>Experience</h3>
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</div>


                </Col>
                <Col
                  lg="3"
                  sm="3"
                  className={
                    stylesJobs[""] + " " + stylesJobs["searchBarIcons"]
                  }
                >
                  <img src="/img/category.png" alt="autojob" />
                  <div className={stylesJobs.jobsOptions}>
<h3>Experience</h3>
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
</div>
                </Col>
                <Col lg="2" sm="2">
                  <a href="#" class="btn btn-primary search-btn">
                    Search
                  </a>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
      <Footer />
    </div>
  );
}
