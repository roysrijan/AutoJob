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

import stylesJobs from "../../styles/Jobs.module.scss";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "../components/footer";
import Link from "next/link";
import { useEffect, useState } from "react";

// import customVirtualTourImg from "../../public/images/custom-virtual-tour.jpg";
// import customVirtualTourImg2 from "../../public/images/img-10.png";
// import customVirtualTourImg3 from "../../public/images/img-11.png";

export default function index() {
  const [recentjobs, setrecentjobs] = useState();
  const [bestjobs, setbestjobs] = useState();
  const [popularjobs, setpopularjobs] = useState();
  useEffect(()=>{
    if(document.location.search){
      sessionStorage.setItem('token', document.location.search.split('=')[1])
    }
    fetch('https://job-qna.herokuapp.com/v1/job?pageNo=0&pageLimit=30&expired=false&&recent=true',{
      headers:{
        'Authorization': 'Bearer '+sessionStorage.getItem('token')
      }
    }).then(async (res)=>{
      setrecentjobs(await res.json())
    })
    fetch('https://job-qna.herokuapp.com/v1/job?pageNo=0&pageLimit=30&expired=false&&isFeatured=true').then(async (res)=>{
      setbestjobs(await res.json())
    })
    fetch('https://job-qna.herokuapp.com/v1/job?pageNo=0&pageLimit=30&expired=false').then(async (res)=>{
      setpopularjobs(await res.json())
    })
  },[]);
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
                <div
                  className={
                    stylesJobs["sectionTitle"] +
                    " " +
                    stylesJobs["sectionTitleWhite"]
                  }
                >
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
                      <option value="volvo">1yrs</option>
                      <option value="saab">2yrs</option>
                      <option value="mercedes">10yrs</option>
                      <option value="audi">15yrs</option>
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
                    <h3>Skills</h3>
                    <select name="cars" id="cars">
                      <option value="volvo">Html</option>
                      <option value="saab">Css</option>
                      <option value="mercedes">Sass</option>
                      <option value="audi">Javascript</option>
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
                    <h3>Location</h3>
                    <select name="cars" id="cars">
                      <option value="volvo">Kolkata</option>
                      <option value="saab">Delhi</option>
                      <option value="mercedes">Hydrabad</option>
                      <option value="audi">Bangalore</option>
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

      <section className={stylesJobs["jobListingWrap"] + " " + "blockPadding"}>
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesJobs.currentJobs}>
                <h2>Recent Jobs</h2>
              </div>
            </Col>

            {recentjobs && recentjobs?.message[0]?.data.map(ele=>(
            <Col lg="4">
              <Link href={"/jobdetails"}>
              <a style={{textDecoration: 'none'}} onClick={()=>sessionStorage.setItem('job',JSON.stringify(ele))}> 
              <div className={stylesJobs.jobListBox}>
                <div className={stylesJobs.jobListBoxImg}>
                  <img src="/img/com-1.jpg" alt="autojob" />
                </div>
                <h2>{ele.jobTitle}</h2>
                <h3>{ele.company}</h3>
                <span>
                  <b>Skills: </b> {ele.domain}
                </span>

                <div className={stylesJobs.jobLocationSal}>
                  <div className={stylesJobs.jobLocation}>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>{ele.location}</p>
                  </div>
                  <div className={stylesJobs.jobSal}>
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <p>
                      <b>Exp : </b> {ele.noOfYearsExperience}Yrs
                    </p>
                  </div>
                </div>
              </div>
              </a> 
              </Link>
            </Col>))}
            <Col lg="4">
              <div className={stylesJobs.jobListBox}>
                <div className={stylesJobs.jobListBoxImg}>
                  <img src="/img/com-2.jpg" alt="autojob" />
                </div>
                <h2>Web Developer</h2>
                <h3>Google</h3>
                <span>
                  <b>Skills: </b> Html, Css, Javascript, angular
                </span>

                <div className={stylesJobs.jobLocationSal}>
                  <div className={stylesJobs.jobLocation}>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>QBL Park, C40</p>
                  </div>
                  <div className={stylesJobs.jobSal}>
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <p>
                      <b>Exp : </b> 5Yrs
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <div className={stylesJobs.jobListBox}>
                <div className={stylesJobs.jobListBoxImg}>
                  <img src="/img/com-3.jpg" alt="autojob" />
                </div>
                <h2>Fullstack web developer</h2>
                <h3>Google</h3>
                <span>
                  <b>Skills: </b> Html, Css, Javascript, angular
                </span>

                <div className={stylesJobs.jobLocationSal}>
                  <div className={stylesJobs.jobLocation}>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>QBL Park, C40</p>
                  </div>
                  <div className={stylesJobs.jobSal}>
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <p>
                      <b>Exp : </b> 5Yrs
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={stylesJobs["stylesTourism"] + " " + "blockPadding"}>
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesJobs.currentJobs}>
                <h2>Best jobs for you</h2>
              </div>
            </Col>
            {bestjobs && bestjobs?.message[0]?.data.map(ele=>
            (<Col lg="6">
              <div className={stylesJobs.allJobs}>
                <h2>{ele.jobTitle}</h2>
                <h3>{ele.company}</h3>
                <h5>Skills : {ele.domain}</h5>
                <div className={stylesJobs.loacExp}>
                  <span>
                    {" "}
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <p>
                      <b>Exp : </b> {ele.noOfYearsExperience}Yrs
                    </p>
                  </span>
                  <span>
                    {" "}
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>{ele.location}</p>
                  </span>
                </div>
                <Link href="/jobdetails">
                  <a className={stylesJobs["applyNow"]} onClick={()=>sessionStorage.setItem('job',JSON.stringify(ele))}>
                    Apply Now
                  </a>
                </Link>
              </div>
            </Col>))}
            <Col lg="6">
              <div className={stylesJobs.allJobs}>
                <h2>SOFTWARE ENGINEER</h2>
                <h3>Brand mantra Pvt. Ltd</h3>
                <h5>Skills : Html, Jquery, React</h5>
                <div className={stylesJobs.loacExp}>
                  <span>
                    {" "}
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <p>
                      <b>Exp : </b> 5Yrs
                    </p>
                  </span>
                  <span>
                    {" "}
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>QBL Park, C40</p>
                  </span>
                </div>

                <a href="#!" className={stylesJobs["applyNow"]}>
                  Apply Now
                </a>
              </div>
            </Col>
            <Col lg="6">
              <div className={stylesJobs.allJobs}>
                <h2>Investment Banker</h2>
                <h3>Brand mantra Pvt. Ltd</h3>
                <h5>Skills : Html, Jquery, React</h5>
                <div className={stylesJobs.loacExp}>
                  <span>
                    {" "}
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <p>
                      <b>Exp : </b> 5Yrs
                    </p>
                  </span>
                  <span>
                    {" "}
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>QBL Park, C40</p>
                  </span>
                </div>

                <a href="#!" className={stylesJobs["applyNow"]}>
                  Apply Now
                </a>
              </div>
            </Col>
            <Col lg="6">
              <div className={stylesJobs.allJobs}>
                <h2>Financial Analyst</h2>
                <h3>Brand mantra Pvt. Ltd</h3>
                <h5>Skills : Html, Jquery, React</h5>
                <div className={stylesJobs.loacExp}>
                  <span>
                    {" "}
                    <i class="fa fa-id-card" aria-hidden="true"></i>
                    <p>
                      <b>Exp : </b> 5Yrs
                    </p>
                  </span>
                  <span>
                    {" "}
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <p>QBL Park, C40</p>
                  </span>
                </div>

                <a href="#!" className={stylesJobs["applyNow"]}>
                  Apply Now
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={stylesJobs["hotJobs"] + " " + "blockPadding"}>
        <Container>
          <Row>
            <Col lg="12">
              <div className={stylesJobs.popJob}>
                <h2>Popular jobs</h2>
              </div>
            </Col>

            {popularjobs && popularjobs?.message[0]?.data.map(ele=>ele.applicantsCount>0 &&
              (<Col lg="3">
              <Card>
                <Card.Img variant="top" src="/img/graphic-designer.jpg" />
                <Card.Body>
                  <Card.Title>{ele.jobTitle}</Card.Title>
                  <div className={stylesJobs.jobDes}>
                    <img src="/img/info.png" alt="autojob" />{" "}
                    <p>{ele.company}</p>
                  </div>
                  <div className={stylesJobs.jobLocationNew}>
                    {" "}
                    <img src="/img/location.png" alt="autojob" />{" "}
                    <p>{ele.location}</p>
                  </div>

                  <div className={stylesJobs.monthsAgo}>
                    <span>
                      {" "}
                      <img src="/img/calendar.png" alt="autojob" />{" "}
                      <p> {ele.ttl} ago</p>{" "}
                    </span>
                    <span>
                      {" "}
                      <img
                        src="/img/three-o-clock-clock.png"
                        alt="autojob"
                      />{" "}
                      <p>Exp : {ele.noOfYearsExperience} yrs</p>{" "}
                    </span>
                  </div>
                  {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  <Link href="/jobdetails"> 
                  <a
                    href="!#"
                    className={
                      stylesJobs["knowMore"] + " " + stylesJobs["viewDetails"]
                    }
                    onClick={()=>sessionStorage.setItem('job',JSON.stringify(ele))}
                  >
                    View details
                  </a>
                  </Link> 
                </Card.Body>
              </Card>
            </Col>))}

            <Col lg="3">
              <Card>
                <Card.Img variant="top" src="/img/soft-eng.jpg" />
                <Card.Body>
                  <Card.Title>SOFTWARE ENGINEER</Card.Title>
                  <div className={stylesJobs.jobDes}>
                    <img src="/img/info.png" alt="autojob" />{" "}
                    <p>Praesent sapien massa, convallis a pellentesque nec</p>
                  </div>
                  <div className={stylesJobs.jobLocationNew}>
                    {" "}
                    <img src="/img/location.png" alt="autojob" />{" "}
                    <p>Dallas, United States</p>
                  </div>

                  <div className={stylesJobs.monthsAgo}>
                    <span>
                      {" "}
                      <img src="/img/calendar.png" alt="autojob" />{" "}
                      <p> 4 months ago</p>{" "}
                    </span>
                    <span>
                      {" "}
                      <img
                        src="/img/three-o-clock-clock.png"
                        alt="autojob"
                      />{" "}
                      <p>Exp : 4 yrs</p>{" "}
                    </span>
                  </div>
                  {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  <a
                    href="!#"
                    className={
                      stylesJobs["knowMore"] + " " + stylesJobs["viewDetails"]
                    }
                  >
                    View details
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="3">
              <Card>
                <Card.Img variant="top" src="/img/managing-director.jpg" />
                <Card.Body>
                  <Card.Title>MANAGING DIRECTOR</Card.Title>
                  <div className={stylesJobs.jobDes}>
                    <img src="/img/info.png" alt="autojob" />{" "}
                    <p>Praesent sapien massa, convallis a pellentesque nec</p>
                  </div>
                  <div className={stylesJobs.jobLocationNew}>
                    {" "}
                    <img src="/img/location.png" alt="autojob" />{" "}
                    <p>Dallas, United States</p>
                  </div>

                  <div className={stylesJobs.monthsAgo}>
                    <span>
                      {" "}
                      <img src="/img/calendar.png" alt="autojob" />{" "}
                      <p> 4 months ago</p>{" "}
                    </span>
                    <span>
                      {" "}
                      <img
                        src="/img/three-o-clock-clock.png"
                        alt="autojob"
                      />{" "}
                      <p>Exp : 4 yrs</p>{" "}
                    </span>
                  </div>
                  {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  <a
                    href="!#"
                    className={
                      stylesJobs["knowMore"] + " " + stylesJobs["viewDetails"]
                    }
                  >
                    View details
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col lg="3">
              <Card>
                <Card.Img variant="top" src="/img/accountant.jpg" />
                <Card.Body>
                  <Card.Title>Senior Accountant</Card.Title>
                  <div className={stylesJobs.jobDes}>
                    <img src="/img/info.png" alt="autojob" />{" "}
                    <p>Praesent sapien massa, convallis a pellentesque nec</p>
                  </div>
                  <div className={stylesJobs.jobLocationNew}>
                    {" "}
                    <img src="/img/location.png" alt="autojob" />{" "}
                    <p>Dallas, United States</p>
                  </div>

                  <div className={stylesJobs.monthsAgo}>
                    <span>
                      {" "}
                      <img src="/img/calendar.png" alt="autojob" />{" "}
                      <p> 4 months ago</p>{" "}
                    </span>
                    <span>
                      {" "}
                      <img
                        src="/img/three-o-clock-clock.png"
                        alt="autojob"
                      />{" "}
                      <p>Exp : 4 yrs</p>{" "}
                    </span>
                  </div>
                  {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                  <a
                    href="!#"
                    className={
                      stylesJobs["knowMore"] + " " + stylesJobs["viewDetails"]
                    }
                  >
                    View details
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
